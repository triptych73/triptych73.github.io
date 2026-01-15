// js/zonal-logic.js

let zonalData = null;

document.addEventListener('DOMContentLoaded', () => {
    initZonalListener();
});

function toggleZonalView() {
    const el = document.getElementById('zonal-view-overlay');
    const isHidden = el.style.display === 'none';
    el.style.display = isHidden ? 'block' : 'none';
    document.body.style.overflow = isHidden ? 'hidden' : 'auto';
}

function initZonalListener() {
    if (typeof firebase === 'undefined') return;
    const db = firebase.firestore();

    db.collection('indexer_analysis').document('zonal_matrix')
        .onSnapshot((doc) => {
            const loading = document.getElementById('zonal-loading');
            const content = document.getElementById('zonal-content');

            if (doc.exists) {
                zonalData = doc.data().data; // The 'data' field has the JSON
                renderZonalNav();
                loading.style.display = 'none';
                content.style.display = 'grid';

                // Select first zone by default
                if (zonalData && zonalData.zones) {
                    const firstZone = Object.keys(zonalData.zones)[0];
                    selectZone(firstZone);
                }
            } else {
                loading.innerHTML = '<div style="color:var(--highlight-red); padding:20px;">' +
                    '<i class="fas fa-exclamation-triangle fa-2x"></i><br><br>' +
                    '<strong>Analysis Not Found</strong><br>' +
                    '<span style="font-size:0.9em; opacity:0.8;">Run "Zonal Analysis" on the Indexer App to generate data.</span>' +
                    '</div>';
            }
        });
}

function renderZonalNav() {
    const nav = document.getElementById('zonal-nav');
    nav.innerHTML = '';

    if (!zonalData || !zonalData.zones) return;

    // Define Sort Order: Roof -> Levels (Desc) -> Ground -> Basement
    const order = ['Roof', 'Level 10', 'Level 9', 'Level 8', 'Level 7', 'Level 6', 'Level 5', 'Level 4', 'Level 3', 'Level 2', 'Level 1', 'Ground', 'Basement'];

    Object.keys(zonalData.zones).sort((a, b) => {
        // Custom sort based on predefined array
        let idxA = order.indexOf(a);
        let idxB = order.indexOf(b);
        // If unknown, put at bottom
        if (idxA === -1) idxA = 100;
        if (idxB === -1) idxB = 100;
        return idxA - idxB;
    }).forEach(zoneName => {
        const btn = document.createElement('div');
        btn.className = 'zone-nav-item';
        btn.innerHTML = `
            <span>${zoneName}</span>
            <i class="fas fa-chevron-right" style="font-size:0.7em; opacity:0.5;"></i>
        `;
        btn.style.padding = '10px 15px';
        btn.style.cursor = 'pointer';
        btn.style.borderBottom = '1px solid var(--glass-border)';
        btn.style.display = 'flex';
        btn.style.justifyContent = 'space-between';
        btn.style.alignItems = 'center';

        btn.onclick = () => {
            document.querySelectorAll('.zone-nav-item').forEach(b => b.style.backgroundColor = 'transparent');
            btn.style.backgroundColor = 'rgba(0,0,0,0.05)';
            selectZone(zoneName);
        };

        nav.appendChild(btn);
    });
}

function selectZone(zoneName) {
    const details = document.getElementById('zone-details');
    const title = document.getElementById('zone-title');

    title.innerText = zoneName;
    details.innerHTML = '';

    const zoneInfo = zonalData.zones[zoneName];
    if (!zoneInfo) return;

    // 1. Notes Section
    if (zoneInfo.notes) {
        const noteDiv = document.createElement('div');
        noteDiv.style.backgroundColor = 'rgba(236, 253, 245, 0.5)'; // Light green tint
        noteDiv.style.border = '1px solid #10B981';
        noteDiv.style.padding = '15px';
        noteDiv.style.borderRadius = '8px';
        noteDiv.style.marginBottom = '20px';
        noteDiv.innerHTML = `<strong><i class="fas fa-info-circle"></i> AI Notes:</strong><br><br>${zoneInfo.notes}`;
        details.appendChild(noteDiv);
    }

    // 2. Regulations Grid
    if (zoneInfo.regulations) {
        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
        grid.style.gap = '15px';

        Object.entries(zoneInfo.regulations).forEach(([regName, statusObj]) => {
            const card = document.createElement('div');
            card.style.background = 'rgba(255,255,255,0.5)';
            card.style.padding = '15px';
            card.style.borderRadius = '8px';
            card.style.border = '1px solid var(--glass-border)';

            // Status Logic
            let color = 'var(--text-muted)';
            let icon = 'fa-circle';
            if (statusObj.status === 'present') {
                color = 'var(--highlight-green)';
                icon = 'fa-check-circle';
            } else if (statusObj.status === 'attention') {
                color = '#F59E0B'; // Amber
                icon = 'fa-exclamation-circle';
            }

            card.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                    <i class="fas ${icon}" style="color:${color}; font-size:1.2em;"></i>
                    <span style="font-weight:600;">${regName}</span>
                </div>
            `;

            // Docs List
            if (statusObj.docs && statusObj.docs.length > 0) {
                const docList = document.createElement('ul');
                docList.style.fontSize = '0.8rem';
                docList.style.paddingLeft = '20px';
                docList.style.margin = '0';
                docList.style.color = 'var(--text-secondary)';

                statusObj.docs.forEach(d => {
                    const li = document.createElement('li');
                    li.innerText = d;
                    docList.appendChild(li);
                });
                card.appendChild(docList);
            } else {
                card.innerHTML += `<div style="font-size:0.8em; color:var(--text-muted); padding-left:28px;">No Data</div>`;
            }

            grid.appendChild(card);
        });

        details.appendChild(grid);
    }
}
