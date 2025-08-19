document.addEventListener('DOMContentLoaded', () => {
  const icono = document.getElementById('icono_hamburguesa');
  const nav = document.getElementById('navegacion');
  icono.addEventListener('click', () => nav.classList.toggle('is-open'));
});