let lanzador = "icono_hamburguesa";
let desplegable = "navegacion";
let despliegaClase = "abierto";

function nav() {
  const lanz = document.getElementById(lanzador);     // ← sin '#'
  if (!lanz) return;
  lanz.addEventListener("click", despliegaMenu);
}

function despliegaMenu() {
  const menu = document.getElementById(desplegable);  // ← sin '#'
  if (!menu) return;
  menu.classList.toggle(despliegaClase);
}

document.addEventListener("DOMContentLoaded", nav);  
