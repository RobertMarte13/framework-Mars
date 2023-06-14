/**
 * * Importaciones de modulos.
 * * Imports of modules.
 */
import Dropdown from "./module/Dropdown.js";
import { Hamburger } from "./module/hamburger.js";

// Variables.
const d = document;

// Ejecución a la carga del DOM.
// Execution on DOM load.
d.addEventListener("DOMContentLoaded", (e) => {

  // * hamburger menu.
  Hamburger();
  // * Botones desplegables
  Dropdown();
});