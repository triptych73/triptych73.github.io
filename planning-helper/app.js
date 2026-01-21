
document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('section-list');
    const contentPanel = document.getElementById('content-panel');
    const emptyState = document.getElementById('empty-state');

    // Elements to update
    const contentId = document.getElementById('content-id');
    const contentTitle = document.getElementById('content-title');
    const tabContent = document.getElementById('tab-content');
    const drawingsGrid = document.getElementById('drawings-grid');
    const compBefore = document.getElementById('comp-before');
    const compAfter = document.getElementById('comp-after');

    let currentSection = null;

    // Render List
    planningData.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <button class="w-full text-left px-4 py-3 rounded-md hover:bg-midnight/5 transition-colors group flex items-start gap-3" onclick="selectSection('${item.id}')">
                <span class="font-mono text-xs text-bronze pt-1">${item.id.padStart(2, '0')}</span>
                <span class="font-sans text-sm text-midnight/80 group-hover:text-midnight line-clamp-2">${item.title}</span>
            </button>
        `;
        listContainer.appendChild(li);
    });

    // Tab Switching Logic
    const tabs = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Deactivate all
            tabs.forEach(t => t.classList.remove('tab-active', 'border-b-2', 'border-bronze', 'text-midnight'));
            tabs.forEach(t => t.classList.add('text-midnight/50'));
            panes.forEach(p => p.classList.add('hidden'));

            // Activate clicked
            tab.classList.remove('text-midnight/50');
            tab.classList.add('tab-active');

            const target = document.getElementById(`tab-${tab.dataset.tab}`);
            target.classList.remove('hidden');

            // 3D Hook
            if (tab.dataset.tab === 'locate') {
                setTimeout(() => {
                    if (!viewer3D.renderer) viewer3D.init();
                    viewer3D.onWindowResize(); // Force resize calc
                    if (currentSection) {
                        if (window.loadSectionData) window.loadSectionData(currentSection.id);
                        else if (viewer3D.loadZones) viewer3D.loadZones(currentSection.id);
                    }
                }, 100);
            }
        });
    });

    // 3D UI Logic
    const editToggle = document.getElementById('edit-mode-toggle');
    const zSliderContainer = document.getElementById('z-slider-container');
    const zSlider = document.getElementById('z-slider');
    const zVal = document.getElementById('z-level-val');

    // Label UI
    const labelsContainer = document.getElementById('labels-container');
    const addLabelBtn = document.getElementById('add-label-btn');
    const labelList = document.getElementById('label-list');

    if (editToggle) {
        editToggle.addEventListener('change', (e) => {
            const enabled = e.target.checked;
            if (viewer3D && viewer3D.toggleEditMode) viewer3D.toggleEditMode(enabled);

            // Toggle Slider & Labels
            if (enabled) {
                zSliderContainer.classList.remove('opacity-50', 'pointer-events-none');
                if (labelsContainer) labelsContainer.classList.remove('opacity-50', 'pointer-events-none');
            } else {
                zSliderContainer.classList.add('opacity-50', 'pointer-events-none');
                if (labelsContainer) labelsContainer.classList.add('opacity-50', 'pointer-events-none');

                // Reset Interaction UI
                if (viewer3D) viewer3D.setInteractionMode('voxel');
                if (addLabelBtn) {
                    addLabelBtn.classList.remove('text-bronze', 'font-bold');
                    addLabelBtn.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>`;
                }
            }
        });
    }

    if (zSlider) {
        zSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            zVal.innerText = val;

            // Always control Slice Level, ignoring label selection as per user request
            if (viewer3D && viewer3D.setSliceLevel) viewer3D.setSliceLevel(val);
        });
    }

    if (addLabelBtn) {
        addLabelBtn.addEventListener('click', () => {
            if (viewer3D.interactionMode === 'label') {
                viewer3D.setInteractionMode('voxel');
                addLabelBtn.classList.remove('text-bronze', 'font-bold');
                addLabelBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>`;
            } else {
                viewer3D.setInteractionMode('label');
                addLabelBtn.classList.add('text-bronze', 'font-bold');
                addLabelBtn.innerHTML = "Click to Place";
            }
        });
    }

    // LABEL EVENT LISTENERS
    window.addEventListener('requestAddLabel', (e) => {
        const text = prompt("Enter Label Text:");
        if (text) {
            viewer3D.addLabel(text, e.detail.position);
            // Revert mode
            viewer3D.setInteractionMode('voxel');
            if (addLabelBtn) {
                addLabelBtn.classList.remove('text-bronze', 'font-bold');
                addLabelBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>`;
            }
        }
    });

    window.addEventListener('labelsUpdated', (e) => {
        renderLabelList(e.detail.labels);
    });

    function renderLabelList(labels) {
        if (!labelList) return;
        labelList.innerHTML = '';
        if (!labels || labels.length === 0) {
            labelList.innerHTML = '<p class="font-sans text-[10px] text-midnight/30 italic text-center py-2">No labels added</p>';
            return;
        }

        labels.forEach(lbl => {
            const div = document.createElement('div');
            div.className = 'flex items-center justify-between group py-1 border-b border-midnight/5 last:border-0';
            div.innerHTML = `
                <span class="font-sans text-[10px] text-midnight truncate max-w-[120px]" title="${lbl.text}">${lbl.text}</span>
                <button class="delete-lbl-btn text-midnight/20 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" data-id="${lbl.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            `;
            labelList.appendChild(div);
        });

        // Attach listeners
        document.querySelectorAll('.delete-lbl-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                viewer3D.removeLabel(id);
            });
        });
    }


    // --- FIREBASE PERSISTENCE & EDITING ---

    // 1. GLOBAL SAVE (Header Button)
    const globalSaveBtn = document.getElementById('global-save-btn');
    if (globalSaveBtn) {
        globalSaveBtn.addEventListener('click', async () => {
            if (!currentSection) return;
            // Auth check: assumes index.html handles the 'window.db' init and auth guard
            if (!window.db) {
                alert("Database not connected. Please refresh or sign in.");
                return;
            }

            const originalText = globalSaveBtn.innerHTML;
            globalSaveBtn.innerHTML = `<span class="animate-pulse">Saving...</span>`;
            globalSaveBtn.classList.add('opacity-50', 'pointer-events-none');

            // Collect Data
            let voxelData = [];
            if (viewer3D && viewer3D.exportConfig) {
                voxelData = viewer3D.exportConfig(true); // Now returns { voxels, labels }
            }

            // Get content (if edited)
            const contentHtml = tabContent.innerHTML;

            try {
                // Save Content
                await window.db.collection('planning_sections').doc(currentSection.id).set({
                    htmlContent: contentHtml,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                    lastModifiedBy: (typeof firebase !== 'undefined' && firebase.auth().currentUser) ? firebase.auth().currentUser.uid : 'anon'
                }, { merge: true });

                // Save Zones & Labels
                await window.db.collection('planning_zones').doc(currentSection.id).set({
                    voxels: voxelData.voxels,
                    labels: voxelData.labels,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });

                globalSaveBtn.innerHTML = `Saved!`;

                // Reset Edit Mode if active
                if (isContentEditing) toggleContentEdit(false);

                setTimeout(() => {
                    globalSaveBtn.innerHTML = originalText;
                    globalSaveBtn.classList.remove('opacity-50', 'pointer-events-none');
                }, 2000);
            } catch (error) {
                console.error("Save Error:", error);
                globalSaveBtn.innerHTML = `Error`;
                alert("Failed to save: " + error.message);
                globalSaveBtn.classList.remove('opacity-50', 'pointer-events-none');
            }
        });
    }

    // 2. CONTENT EDITING
    let isContentEditing = false;
    let editBtn = null;

    const toggleContentEdit = (enable) => {
        isContentEditing = enable;
        tabContent.contentEditable = enable;

        if (enable) {
            tabContent.classList.add('border', 'border-dashed', 'border-bronze', 'p-4', 'rounded', 'bg-white');
            tabContent.focus();
            if (editBtn) editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>`;
        } else {
            tabContent.classList.remove('border', 'border-dashed', 'border-bronze', 'p-4', 'rounded', 'bg-white');
            if (editBtn) editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-midnight/30 hover:text-bronze transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>`;
        }
    };

    // 3. LOAD DATA (Content + Voxels)
    window.loadSectionData = async (id) => {
        // A. Load Static Defaults First
        const staticData = planningData.find(d => d.id === id);

        // Reset Viewer
        if (viewer3D && viewer3D.renderer) viewer3D.loadZones(id, { voxels: [], labels: [] });

        // Reset Content to Static Default
        if (staticData) {
            tabContent.innerHTML = staticData.content + (staticData.context ? `<div class="mt-8 p-6 bg-white border border-midnight/5 rounded"><h4 class="font-serif text-xs uppercase text-bronze mb-2">Context</h4><p class="font-sans text-sm">${staticData.context}</p></div>` : '');
        }

        // B. Fetch Overrides from Cloud
        if (window.db) {
            try {
                // Fetch Content
                const contentDoc = await window.db.collection('planning_sections').doc(id).get();
                if (contentDoc.exists) {
                    const data = contentDoc.data();
                    if (data.htmlContent) {
                        tabContent.innerHTML = data.htmlContent;
                    }
                }

                // Fetch Zones
                const zonesDoc = await window.db.collection('planning_zones').doc(id).get();
                if (zonesDoc.exists) {
                    const data = zonesDoc.data();
                    // Supports legacy 'voxels' array or new object
                    viewer3D.loadZones(id, data);
                    renderLabelList(data.labels || []);
                }
            } catch (e) {
                console.warn("Could not fetch cloud data:", e);
            }
        }
    };

    // Global selector function
    window.selectSection = (id) => {
        const data = planningData.find(d => d.id === id);
        if (!data) return;

        currentSection = data;

        // UI Updates
        emptyState.classList.add('hidden');
        contentPanel.classList.remove('hidden');

        // Populate Header
        contentId.innerText = `Section ${data.id.padStart(2, '0')}`;

        // Populate Title with Edit Button
        contentTitle.innerHTML = `<span class="mr-2">${data.title}</span>`;
        // Inject Edit Button logic
        editBtn = document.createElement('button');
        editBtn.className = "ml-2 inline-flex items-center justify-center p-1 rounded-full hover:bg-midnight/5 transition-colors group";
        editBtn.title = "Edit Content";
        editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-midnight/30 group-hover:text-bronze transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>`;
        editBtn.onclick = (e) => {
            e.stopPropagation();
            toggleContentEdit(!isContentEditing);
        };
        contentTitle.appendChild(editBtn);


        // Populate Drawings
        drawingsGrid.innerHTML = '';
        if (data.drawings && data.drawings.length > 0) {
            data.drawings.forEach(drawing => {
                const el = document.createElement('div');
                el.className = 'w-full aspect-video bg-white border border-midnight/10 flex items-center justify-center p-4 hover:border-bronze cursor-pointer transition-colors group relative overflow-hidden';
                el.innerHTML = `
                   <div class="absolute inset-0 bg-midnight/5 group-hover:bg-midnight/0 transition-colors"></div> 
                   <div class="text-center z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-2 text-midnight/30 group-hover:text-bronze transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p class="font-mono text-xs text-midnight/60">${drawing}</p>
                   </div>
                `;
                drawingsGrid.appendChild(el);
            });
        } else {
            drawingsGrid.innerHTML = '<p class="text-sm text-midnight/40 italic col-span-2 text-center py-12">No specific drawings referenced.</p>';
        }

        // Populate Comparison
        compBefore.innerText = data.comparison?.before || "No specific existing condition noted.";
        compAfter.innerText = data.comparison?.after || "No specific variation noted.";

        // LOAD DATA
        if (window.loadSectionData) {
            window.loadSectionData(id);
        }

        // Highlight selected in list
        const buttons = listContainer.querySelectorAll('button');
        buttons.forEach(btn => {
            if (btn.querySelector('span').innerText === id.padStart(2, '0')) {
                btn.classList.add('bg-selected');
            } else {
                btn.classList.remove('bg-selected');
            }
        });

        // Tab Navigation Safety
        const activeTab = document.querySelector('.tab-btn.tab-active');
        if (!activeTab || activeTab.dataset.tab !== 'locate') {
            if (tabs[0]) tabs[0].click();
        } else {
            // If already in locate, trigger resize/init just in case
            setTimeout(() => {
                if (viewer3D && !viewer3D.renderer) viewer3D.init();
            }, 100);
        }
    };
});
