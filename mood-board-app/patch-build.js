const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const nextDir = path.join(outDir, '_next');
const newDir = path.join(outDir, 'static-assets');

// Utility to recursively walk chunks
function getAllFiles(dirPath, arrayOfFiles) {
    if (!fs.existsSync(dirPath)) return arrayOfFiles || [];
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        // Skip .git or sensitive dirs if any
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

// 1. Rename _next to static-assets
if (fs.existsSync(nextDir)) {
    console.log(`Renaming ${nextDir} to ${newDir}...`);
    if (fs.existsSync(newDir)) {
        fs.rmSync(newDir, { recursive: true, force: true });
    }
    fs.renameSync(nextDir, newDir);
} else {
    // Check if it's already renamed
    if (!fs.existsSync(newDir)) {
        console.warn('Warning: _next directory missing and static-assets not found.');
    }
}

// 2. Patch files
console.log('Patching files in full output directory...');
try {
    const allFiles = getAllFiles(outDir);
    let patchedCount = 0;

    allFiles.forEach(filePath => {
        const ext = path.extname(filePath);
        // Patch HTML, JS, CSS, JSON, TXT
        if (['.html', '.js', '.css', '.txt', '.json', '.map'].includes(ext)) {
            let content = fs.readFileSync(filePath, 'utf8');
            let originalContent = content;

            // Multi-pass replacement for safety

            // 1. Replace absolute paths /_next/ -> /static-assets/
            content = content.replace(/\/_next\//g, '/static-assets/');

            // 2. Replace relative paths ./_next/ -> ./static-assets/
            content = content.replace(/\.\/_next\//g, './static-assets/');

            // 3. Replace paths starting with _next/ (e.g. in CSS url() sometimes)
            // Be careful to match words boundaries if possible or specific contexts
            // But _next/ is pretty unique.
            content = content.replace(/\"_next\//g, '"static-assets/');
            content = content.replace(/\'_next\//g, "'static-assets/");

            // 4. CSS url(_next/...)
            content = content.replace(/url\(_next\//g, 'url(static-assets/');
            // CSS url(/_next/...)
            content = content.replace(/url\(\/_next\//g, 'url(/static-assets/');


            if (content !== originalContent) {
                fs.writeFileSync(filePath, content);
                patchedCount++;
            }
        }
    });
    console.log(`Patched ${patchedCount} files.`);

} catch (e) {
    console.error('Error patching files:', e);
    process.exit(1);
}

console.log('Done.');
