const toggleEl = document.getElementById('toggler');
const bodyEl = document.body;

toggleEl.addEventListener('change', () => {
    // Toggle the 'dark-theme' class on the body
    bodyEl.classList.toggle('dark-theme', toggleEl.checked);
});
