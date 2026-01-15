document.addEventListener('DOMContentLoaded', () => {
    const checklistItems = document.querySelectorAll('.checklist-item');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-stats span:first-child');

    // Total items = items already implicitly done (60%) + items in the list
    // This is a simulation. Let's assume the 60% represents 'base work' which is fixed.
    // The checklist represents the remaining 40%.

    const BASE_PROGRESS = 60;
    const REMAINING_PCT = 40;

    function updateProgress() {
        const totalItems = checklistItems.length;
        const checkedItems = document.querySelectorAll('.checklist-item.checked').length;

        const additionalProgress = (checkedItems / totalItems) * REMAINING_PCT;
        const totalProgress = Math.round(BASE_PROGRESS + additionalProgress);

        if (progressBar) progressBar.style.width = `${totalProgress}%`;
        if (progressText) progressText.textContent = `${totalProgress}% Project Complete`;

        // Visual flair: Change color if complete
        if (totalProgress === 100 && progressBar) {
            progressBar.style.background = 'linear-gradient(90deg, #10b981, #34d399)';
        }
    }

    checklistItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');

            // Toggle badge text if it exists (optional enhancement for future)
            // Save state to local storage (optional)

            updateProgress();
        });
    });

    // Initialize
    updateProgress();
});
