// Tiny progressive enhancement (e.g., collapse sections on mobile)
document.addEventListener('click', (e) => {
    const h = e.target.closest('.mc-section-title');
    if (!h) return;
    const section = h.parentElement;
    if (window.matchMedia('(max-width: 720px)').matches) {
        section.classList.toggle('is-collapsed');
    }
});