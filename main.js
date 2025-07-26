/* Initialize Feather icons */
feather.replace();

/* Nav burger functionality */
const burger = document.querySelector('.nav__toggle');
const links = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = links.classList.toggle('show');
  burger.setAttribute('aria-expanded', open);
  document.body.classList.toggle('menu-open', open);
});

/* Gallery lightbox */
const gallery = document.getElementById('galleryGrid');
gallery.addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;
  
  const src = btn.dataset.src;
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.9);
    display: grid;
    place-items: center;
    z-index: 100;
  `;
  
  const img = document.createElement('img');
  img.src = src;
  img.style.cssText = `
    max-width: 90vw;
    max-height: 90vh;
    border-radius: 12px;
  `;
  
  overlay.appendChild(img);
  document.body.appendChild(overlay);
  
  overlay.addEventListener('click', () => overlay.remove());
});

/* Progress tracking function */
function continuar() {
  alert("🔄 Cargando módulo actual...");
}