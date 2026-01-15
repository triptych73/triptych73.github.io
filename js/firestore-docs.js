// firestore-docs.js
// Logic to fetch, filter, and render documents from Firestore "indexer_files"

const DB_COLLECTION = 'indexer_files';
const TARGET_PATH_SUBSTRING = 'Approved Inspector';

// Categories for logic
const CATEGORIES = {
    STAGE_NOTICES: {
        id: 'list-stage-notices',
        keywords: ['Notice', 'Stage'],
        icon: 'fa-flag',
        docs: []
    },
    DESIGN_CHECKS: {
        id: 'list-design-checks',
        keywords: ['Check', 'Sign-Off', 'Engineering', 'Plan'],
        icon: 'fa-clipboard-check',
        docs: []
    },
    SUBMISSIONS: {
        id: 'list-submissions',
        keywords: [], // Special logic for this
        icon: 'fa-paper-plane',
        docs: []
    },
    GENERAL: {
        id: 'list-general-docs',
        keywords: [],
        icon: 'fa-file-alt',
        docs: []
    }
};

// Sort State
const SORT_STATE = {
    by: 'date', // 'name' or 'date'
    dir: 'desc' // 'asc' or 'desc'
};

document.addEventListener('DOMContentLoaded', () => {
    initFirestoreDocs();
    initSortControls();
});

function initSortControls() {
    // Inject sort controls into headers
    const dashboard = document.querySelector('.dashboard-grid');
    if (dashboard) {
        const toolbar = document.createElement('div');
        toolbar.style.gridColumn = "1 / -1";
        toolbar.style.display = "flex";
        toolbar.style.justifyContent = "flex-end";
        toolbar.style.marginBottom = "10px";
        toolbar.style.gap = "10px";

        toolbar.innerHTML = `
            <span style="color:var(--text-muted); font-size:0.8rem; align-self:center;">SORT BY:</span>
            <button class="sort-btn active" data-sort="date" style="background:none; border:none; color:var(--accent-gold); font-weight:bold; cursor:pointer; font-size:0.8rem;">
                <i class="far fa-calendar-alt"></i> Date
            </button>
            <button class="sort-btn" data-sort="name" style="background:none; border:none; color:var(--text-secondary); cursor:pointer; font-size:0.8rem;">
                <i class="fas fa-sort-alpha-down"></i> Name
            </button>
        `;

        dashboard.parentNode.insertBefore(toolbar, dashboard);

        toolbar.querySelectorAll('.sort-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Update active state
                toolbar.querySelectorAll('.sort-btn').forEach(b => {
                    b.style.color = 'var(--text-secondary)';
                    b.style.fontWeight = 'normal';
                });
                e.currentTarget.style.color = 'var(--accent-gold)';
                e.currentTarget.style.fontWeight = 'bold';

                const sortBy = e.currentTarget.dataset.sort;
                SORT_STATE.by = sortBy;
                reRenderAll();
            });
        });
    }
}

function initFirestoreDocs() {
    console.log("[FirestoreDocs] Initializing Real-time Listener...");

    if (typeof firebase === 'undefined') {
        console.error("[FirestoreDocs] Firebase not loaded via global script.");
        return;
    }

    const db = firebase.firestore();

    // REAL-TIME LISTENER (Automatic Updates)
    db.collection(DB_COLLECTION)
        .where('provider', '==', 'onedrive')
        .onSnapshot((querySnapshot) => {
            const allDocs = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.folder_path && data.folder_path.includes(TARGET_PATH_SUBSTRING)) {
                    allDocs.push({ id: doc.id, ...data });
                }
            });

            console.log(`[FirestoreDocs] Update received: ${allDocs.length} matching documents.`);
            categorizeDocs(allDocs);
            reRenderAll();
        }, (error) => {
            console.error("[FirestoreDocs] Error fetching docs: ", error);
            renderError(error);
        });
}

function categorizeDocs(allDocs) {
    // Reset categories
    Object.values(CATEGORIES).forEach(cat => cat.docs = []);

    allDocs.forEach(doc => {
        const name = doc.name || 'Untitled';
        const path = doc.folder_path || '';

        // Priority 1: Submissions (if path contains "Sent")
        if (path.includes('/Sent') || path.includes('Sent ')) {
            CATEGORIES.SUBMISSIONS.docs.push(doc);
        }
        // Priority 2: Stage Notices
        else if (matchesKeywords(name, CATEGORIES.STAGE_NOTICES.keywords)) {
            CATEGORIES.STAGE_NOTICES.docs.push(doc);
        }
        // Priority 3: Design Checks
        else if (matchesKeywords(name, CATEGORIES.DESIGN_CHECKS.keywords)) {
            CATEGORIES.DESIGN_CHECKS.docs.push(doc);
        }
        // Fallback: General
        else {
            CATEGORIES.GENERAL.docs.push(doc);
        }
    });
}

function reRenderAll() {
    Object.values(CATEGORIES).forEach(category => {
        if (category === CATEGORIES.SUBMISSIONS) {
            renderSubmissions(category);
        } else {
            renderCategory(category);
        }
    });
}

function renderCategory(category) {
    const container = document.getElementById(category.id);
    if (!container) return;

    container.innerHTML = '';

    // Sort
    const docs = [...category.docs];
    docs.sort((a, b) => sortFn(a, b));

    if (docs.length === 0) {
        displayEmptyState(category.id);
        return;
    }

    docs.forEach(doc => {
        const card = createDocCard(doc);
        container.appendChild(card);
    });
}

function renderSubmissions(category) {
    const container = document.getElementById(category.id);
    if (!container) return;

    container.innerHTML = '';

    if (category.docs.length === 0) {
        displayEmptyState(category.id);
        return;
    }

    // Group by Folder Name (e.g., "Sent Dec 2018")
    const groups = {};
    category.docs.forEach(doc => {
        const parts = doc.folder_path.split('/');
        // Find the part that contains "Sent"
        const sentFolder = parts.find(p => p.includes('Sent')) || 'Other Submissions';

        if (!groups[sentFolder]) groups[sentFolder] = [];
        groups[sentFolder].push(doc);
    });

    // Sort Groups Chronologically (Newest First)
    const sortedKeys = Object.keys(groups).sort((a, b) => {
        const parseDate = (str) => {
            // Remove "Sent" and extra spaces to get "Dec 2018" etc.
            const dateStr = str.replace(/Sent/i, '').trim();
            const date = new Date(dateStr);
            // Fallback for invalid dates (treat as old)
            return isNaN(date.getTime()) ? 0 : date.getTime();
        };

        // Descending order
        return parseDate(b) - parseDate(a);
    });

    sortedKeys.forEach((groupName, index) => {
        // Group Container
        const groupDiv = document.createElement('div');
        groupDiv.style.marginBottom = '10px';

        // Header (Clickable)
        const header = document.createElement('div');
        header.className = 'dynamic-section-header';
        header.style.cursor = 'pointer';
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.fontSize = '0.8rem';
        header.style.color = 'var(--text-muted)';
        header.style.marginTop = '15px';
        header.style.marginBottom = '5px';

        // Default to first one open
        const isOpen = index === 0;

        header.innerHTML = `
            <span>${groupName}</span>
            <i class="fas fa-chevron-${isOpen ? 'down' : 'right'} toggle-icon"></i>
        `;

        // Content Container
        const contentDiv = document.createElement('div');
        contentDiv.style.display = isOpen ? 'block' : 'none';
        contentDiv.style.transition = 'all 0.3s ease';

        // Sort Files in group
        const groupDocs = groups[groupName].sort((a, b) => sortFn(a, b));

        groupDocs.forEach(doc => {
            contentDiv.appendChild(createDocCard(doc));
        });

        // Toggle Logic
        header.onclick = () => {
            const isHidden = contentDiv.style.display === 'none';
            contentDiv.style.display = isHidden ? 'block' : 'none';
            header.querySelector('.toggle-icon').className = `fas fa-chevron-${isHidden ? 'down' : 'right'} toggle-icon`;
            header.style.color = isHidden ? 'var(--accent-gold)' : 'var(--text-muted)';
        };

        if (isOpen) {
            header.style.color = 'var(--accent-gold)';
        }

        groupDiv.appendChild(header);
        groupDiv.appendChild(contentDiv);
        container.appendChild(groupDiv);
    });
}

function sortFn(a, b) {
    if (SORT_STATE.by === 'name') {
        return a.name.localeCompare(b.name);
    } else {
        // Date desc
        const getMillis = (d) => {
            const val = d.last_modified_at || d.last_indexed_at;
            if (!val) return 0;
            if (val.toMillis) return val.toMillis();
            if (val.seconds) return val.seconds * 1000;
            return new Date(val).getTime();
        };
        return getMillis(b) - getMillis(a);
    }
}

function matchesKeywords(text, keywords) {
    const lower = text.toLowerCase();
    return keywords.some(k => lower.includes(k.toLowerCase()));
}

function createDocCard(doc) {
    const div = document.createElement('div');
    div.className = 'doc-link';
    div.style.marginBottom = '10px';
    div.style.cursor = 'pointer';

    // Icon
    let iconClass = 'fa-file';
    if (doc.file_type === 'pdf') iconClass = 'fa-file-pdf';
    else if (doc.file_type === 'docx') iconClass = 'fa-file-word';
    else if (['jpg', 'png', 'jpeg'].includes(doc.file_type)) iconClass = 'fa-file-image';

    // Status Icon
    let statusIcon = '';
    if (doc.name.toLowerCase().includes('sign-off') || doc.name.toLowerCase().includes('approved')) {
        statusIcon = '<i class="fas fa-check-circle" style="color: var(--highlight-green); margin-left: auto;"></i>';
    }

    // Metadata Construction
    let metaParts = [];

    // Date
    // Prefer original modification date, fallback to index date
    const dateField = doc.last_modified_at || doc.last_indexed_at;

    if (dateField) {
        // Firestore Timestamp or String check
        let dateObj = null;
        if (dateField.toDate) {
            dateObj = dateField.toDate();
        } else if (dateField.seconds) {
            dateObj = new Date(dateField.seconds * 1000);
        } else {
            // String fallback (ISO string from API)
            dateObj = new Date(dateField);
        }

        if (dateObj && !isNaN(dateObj.getTime())) {
            metaParts.push(dateObj.toLocaleDateString());
        }
    }

    // Type
    if (doc.file_type) {
        metaParts.push(doc.file_type.toUpperCase());
    }

    const metaString = metaParts.join(' • ');

    div.innerHTML = `
        <div class="doc-icon"><i class="fas ${iconClass}"></i></div>
        <div style="flex: 1; overflow: hidden;">
            <div class="doc-name" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${doc.name}">${doc.name}</div>
            <div class="doc-sub" style="font-size: 0.75rem; opacity: 0.7;">${metaString}</div>
        </div>
        ${statusIcon}
    `;

    div.onclick = () => openDocViewer(doc);
    return div;
}

function displayEmptyState(containerId) {
    const el = document.getElementById(containerId);
    if (el) el.innerHTML = '<div style="padding:15px; color:var(--text-muted); font-size:0.9rem;">No documents found.</div>';
}

function renderError(error) {
    Object.values(CATEGORIES).forEach(cat => {
        const el = document.getElementById(cat.id);
        if (el) el.innerHTML = `<div style="padding:15px; color:var(--highlight-red); font-size:0.9rem;">Error: ${error.message}</div>`;
    });
}

// Viewer Functions (Unchanged)
// Viewer Functions
function openDocViewer(doc) {
    const modal = document.getElementById('doc-viewer-modal');
    const titleCtx = document.getElementById('modal-doc-title');
    const bodyCtx = document.getElementById('modal-doc-body');

    if (!modal) return;

    titleCtx.textContent = doc.name;

    const rawContent = doc.content || "*No content indexed for this file.*";

    // 1. Parse Content
    // Structure typically: 
    // # Source: ... (Metadata)
    // [Transcript Text]
    // ---
    // ### AI Analysis (Summary)

    // Regex for Metadata Header (Lazy match until first double newline or equivalent)
    const metaRegex = /^# Source:[\s\S]*?---\n\n/m;

    // Regex for AI Analysis Footer
    // Matches from "---" followed by "### AI Analysis" to key end
    const analysisRegex = /\n\n---\n### AI Analysis[\s\S]*$/;

    // Extract Transcript (Remove Meta and Analysis)
    let transcript = rawContent.replace(metaRegex, '').replace(analysisRegex, '').trim();

    // Extract Summary (AI Analysis)
    const analysisMatch = rawContent.match(analysisRegex);
    let summary = analysisMatch ? analysisMatch[0].replace(/\n\n---\n### AI Analysis/, '').trim() : '';

    // 2. Logic: Show Transcript if substantially present, else Summary
    // "iff there is no transcription" -> If transcript is empty
    let contentToDisplay = '';

    // HEURISTIC: If transcript has > 50 characters, assume it's valid text.
    if (transcript.length > 50) {
        contentToDisplay = transcript;
    } else if (summary.length > 0) {
        // Fallback to Summary if Transcript is missing/weak
        contentToDisplay = `### Summary (AI Generated)\n\n${summary}`;
    } else {
        // Fallback to raw if logic fails (e.g. Image description might be in transcript)
        // For Images, 'transcript' actually holds the Vision Description because there's no "### AI Analysis" appended usually.
        // So this logic works for images too (transcript > 50 chars).
        contentToDisplay = rawContent;
    }

    if (typeof marked !== 'undefined') {
        bodyCtx.innerHTML = marked.parse(contentToDisplay);
    } else {
        bodyCtx.innerText = contentToDisplay;
    }

    modal.style.display = 'flex';
}

function closeDocViewer() {
    const modal = document.getElementById('doc-viewer-modal');
    if (modal) modal.style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('doc-viewer-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
