const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const nextDir = path.join(outDir, '_next');
const newDir = path.join(outDir, 'static-assets');

// Utility to recursively walk chunks
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
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
}

// 2. Patch files
console.log('Patching references in output files...');
try {
    const allFiles = getAllFiles(outDir);
    let patchedCount = 0;

    allFiles.forEach(filePath => {
        const ext = path.extname(filePath);
        if (ext === '.html' || ext === '.js' || ext === '.css' || ext === '.txt') {
            let content = fs.readFileSync(filePath, 'utf8');

            // With basePath: '/mood-board-app/out'
            // URLs are: /mood-board-app/out/_next/...
            // We want: /mood-board-app/out/static-assets/...
            // So we replace `/_next/` with `/static-assets/`.

            if (content.includes('/_next/')) {
                const newContent = content.replace(/\/_next\//g, '/static-assets/');
                fs.writeFileSync(filePath, newContent);
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
