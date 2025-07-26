/* =========================================================
   CH Tennis Academy – JavaScript
   ========================================================= */

/* ------------------------ Mobile navigation toggle ------------------------ */
const nav = document.querySelector('.nav');
const toggleBtn = document.querySelector('.nav__toggle');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });
}

/* ------------------------------ Lightbox ------------------------------ */
document
  .querySelectorAll('.gallery button')
  .forEach((btn) => btn.addEventListener('click', () => openLightbox(btn)));

function openLightbox(btn) {
  const src = btn.dataset.src;
  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.innerHTML = `<img src="${src}" alt="Imagen ampliada de la galería" />`;
  document.body.appendChild(overlay);

  // Cerrar con click exterior o ESC
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
  document.addEventListener('keydown', escHandler);
  function escHandler(e) {
    if (e.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', escHandler);
    }
  }
}

/* -------------------- Active nav link while scrolling -------------------- */
const links = [...document.querySelectorAll('.nav__links a')];
const sections = [...document.querySelectorAll('section[id]')];

window.addEventListener('scroll', () => {
  const pos = window.scrollY + 100; // offset for header height
  sections.forEach((section) => {
    const id = section.id;
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const link = document.querySelector(`a[href="#${id}"]`);
    if (pos >= top && pos < top + height) link.classList.add('active');
    else link.classList.remove('active');
  });
});
