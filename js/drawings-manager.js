document.addEventListener('DOMContentLoaded', () => {
    let allData = {};
    let currentCategory = null;

    const elements = {
        sidebarList: document.getElementById('sidebar-list'),
        tableBody: document.getElementById('drawings-table-body'),
        categoryTitle: document.getElementById('current-category-title'),
        categoryCount: document.getElementById('current-category-count'),
        searchInput: document.getElementById('search-input'),
        emptyState: document.getElementById('empty-state')
    };

    // Load Data
    fetch('assets/data/drawings.json')
        .then(response => response.json())
        .then(data => {
            allData = data;
            initApp();
        })
        .catch(err => {
            console.error(err);
            elements.sidebarList.innerHTML = '<div class="text-xs text-red-500 text-center py-4">Error loading data</div>';
        });

    function initApp() {
        const categories = Object.keys(allData);
        if (categories.length === 0) {
            elements.sidebarList.innerHTML = '<div class="text-xs text-white/20 text-center py-4">No categories found</div>';
            return;
        }

        // Render Sidebar
        renderSidebar(categories);

        // Select first category by default
        selectCategory(categories[0]);

        // Event Listeners
        elements.searchInput.addEventListener('input', (e) => {
            renderTable(currentCategory, e.target.value);
        });
    }

    function renderSidebar(categories) {
        elements.sidebarList.innerHTML = '';
        categories.forEach(cat => {
            const div = document.createElement('div');
            div.className = 'sidebar-item px-3 py-2 text-xs font-mono text-white/60 mb-1';
            div.textContent = cat;
            div.dataset.category = cat;
            div.onclick = () => selectCategory(cat);
            elements.sidebarList.appendChild(div);
        });
    }

    function selectCategory(categoryName) {
        currentCategory = categoryName;

        // Update Sidebar UI
        document.querySelectorAll('.sidebar-item').forEach(el => {
            if (el.dataset.category === categoryName) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });

        // Update Header
        elements.categoryTitle.textContent = categoryName;

        // Clear Search
        elements.searchInput.value = '';

        // Render Table
        renderTable(categoryName);
    }

    function renderTable(categoryName, filterText = '') {
        const drawings = allData[categoryName] || [];
        const filtered = drawings.filter(d => {
            if (!filterText) return true;
            const text = filterText.toLowerCase();
            return (d.number?.toLowerCase().includes(text) ||
                d.title?.toLowerCase().includes(text) ||
                d.revision?.toLowerCase().includes(text));
        });

        elements.categoryCount.textContent = `${filtered.length} ITEMS`;
        elements.tableBody.innerHTML = '';

        if (filtered.length === 0) {
            elements.emptyState.classList.remove('hidden');
        } else {
            elements.emptyState.classList.add('hidden');

            filtered.forEach(d => {
                const tr = document.createElement('tr');
                tr.className = 'group transition-colors';

                // Helper for cell content
                const cell = (content, extraClasses = '') => {
                    const td = document.createElement('td');
                    td.className = `px-6 py-4 whitespace-nowrap ${extraClasses}`;
                    td.textContent = content || '-';
                    if (!content) td.classList.add('text-white/10');
                    return td;
                };

                // Thumbnail
                const tdThumb = document.createElement('td');
                tdThumb.className = 'px-6 py-4 whitespace-nowrap';
                if (d.thumbnail) {
                    const img = document.createElement('img');
                    img.src = d.thumbnail;
                    img.className = 'h-10 w-10 object-cover rounded border border-white/10 hover:scale-150 transition-transform cursor-pointer bg-white/5';
                    img.onclick = () => window.open(d.thumbnail, '_blank');
                    tdThumb.appendChild(img);
                } else {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'h-10 w-10 rounded bg-white/5 border border-white/5 flex items-center justify-center';
                    placeholder.innerHTML = '<svg class="w-4 h-4 text-white/10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>';
                    tdThumb.appendChild(placeholder);
                }
                tr.appendChild(tdThumb);

                // Number (highlighted)
                const numTd = cell(d.number, 'font-mono text-bronze group-hover:text-white transition-colors');
                tr.appendChild(numTd);

                // Title
                tr.appendChild(cell(d.title, 'font-medium text-white/90'));

                // Rev
                tr.appendChild(cell(d.revision, 'font-mono text-xs'));

                // Scale
                tr.appendChild(cell(d.scale, 'text-xs text-white/60'));

                // Size
                tr.appendChild(cell(d.size, 'text-xs text-white/60'));

                // Date
                tr.appendChild(cell(d.date, 'font-mono text-xs text-white/40'));

                // Status
                const status = d.status || d.phase || '';
                const startTd = cell(status, 'text-[10px] uppercase tracking-wider');
                if (status.toLowerCase().includes('replace') || status.toLowerCase().includes('change')) {
                    startTd.classList.add('text-alert/80');
                } else {
                    startTd.classList.add('text-white/40');
                }
                tr.appendChild(startTd);

                elements.tableBody.appendChild(tr);
            });
        }
    }
});
