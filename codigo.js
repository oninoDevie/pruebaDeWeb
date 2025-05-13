/* ---------- Lightbox ---------- */
document
  .querySelectorAll(".gallery button")
  .forEach((btn) => btn.addEventListener("click", () => openLightbox(btn)));

function openLightbox(btn) {
  const src = btn.dataset.src;
  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.innerHTML = `<img src="${src}" alt="Imagen de la galería" />`;
  document.body.appendChild(overlay);

  /* Cerrar con click exterior o ESC */
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.remove();
  });
  document.addEventListener("keydown", escHandler);
  function escHandler(e) {
    if (e.key === "Escape") {
      overlay.remove();
      document.removeEventListener("keydown", escHandler);
    }
  }
}

/* ---------- Navegación activa al hacer scroll ---------- */
const links = [...document.querySelectorAll(".nav__links a")];
const sections = [...document.querySelectorAll("section[id]")];

window.addEventListener("scroll", () => {
  const pos = window.scrollY + 90; // offset de menú

  sections.forEach((section) => {
    const id = section.id;
    const top = section.offsetTop;
    const h = section.offsetHeight;
    const link = document.querySelector(`a[href="#${id}"]`);
    if (pos >= top && pos < top + h) link.classList.add("active");
    else link.classList.remove("active");
  });
});
