import { $, $$, d } from './Document.js';

export default function Dropdown() {

  d.addEventListener('click', e => {

      /**
       * ? Mostrar lista del boton desplegable.
      */
      if(e.target.matches(".dropdown-btn") 
        || e.target.matches(`${".dropdown-btn"} *`)) {

        $('.dropdown-btn').style.display = 'none';
        $('.dropdown-btn-up').style.display = 'block';
        $('.content-link-dropdown').style.display = 'block';
      };

      /**
       * Botones secundarios
       */
      if(e.target.matches(".dropdown-btn-secondary") 
        || e.target.matches(`${".dropdown-btn-secondary"} *`)) {

        $('.dropdown-btn-secondary').style.display = 'none';
        $('.dropdown-btn-up-secondary').style.display = 'block';
        $('.content-link-dropdown-secondary').style.display = 'block';
      };

      /**
       * Botones tersiario
       */
      if(e.target.matches(".dropdown-btn-tertiary") 
        || e.target.matches(`${".dropdown-btn-tertiary"} *`)) {

        $('.dropdown-btn-tertiary').style.display = 'none';
        $('.dropdown-btn-up-tertiary').style.display = 'block';
        $('.content-link-dropdown-tertiary').style.display = 'block';
      };

      /**
       * Botones cuarto
       */
      if(e.target.matches(".dropdown-btn-fourth") 
        || e.target.matches(`${".dropdown-btn-fourth"} *`)) {

        $('.dropdown-btn-fourth').style.display = 'none';
        $('.dropdown-btn-up-fourth').style.display = 'block';
        $('.content-link-dropdown-fourth').style.display = 'block';
      };

      /**
       * Botones quinto
       */
      if(e.target.matches(".dropdown-btn-fifth") 
        || e.target.matches(`${".dropdown-btn-fifth"} *`)) {

        $('.dropdown-btn-fifth').style.display = 'none';
        $('.dropdown-btn-up-fifth').style.display = 'block';
        $('.content-link-dropdown-fifth').style.display = 'block';
      };

      /**
       * * Ocultar lista del boton desplegable.
      */
      if(e.target.matches(".dropdown-btn-up") 
        || e.target.matches(`${".dropdown-btn-up"} *`)) {

        $('.dropdown-btn').style.display = 'block';
        $('.dropdown-btn-up').style.display = 'none';
        $('.content-link-dropdown').style.display = 'none';
      };

      /**
       * Botones secundarios Ocultar
       */
      if(e.target.matches(".dropdown-btn-up-secondary") 
        || e.target.matches(`${".dropdown-btn-up-secondary"} *`)) {

        /* Botones secundarios */
        $('.dropdown-btn-secondary').style.display = 'block';
        $('.dropdown-btn-up-secondary').style.display = 'none';
        $('.content-link-dropdown-secondary').style.display = 'none';
      };

      /**
       * Botones tersiario Ocultar
       */
      if(e.target.matches(".dropdown-btn-up-tertiary") 
        || e.target.matches(`${".dropdown-btn-up-tertiary"} *`)) {

        /* Botones secundarios */
        $('.dropdown-btn-tertiary').style.display = 'block';
        $('.dropdown-btn-up-tertiary').style.display = 'none';
        $('.content-link-dropdown-tertiary').style.display = 'none';
      };

      /**
       * Botones cuarto
       */
      if(e.target.matches(".dropdown-btn-up-fourth") 
        || e.target.matches(`${".dropdown-btn-up-fourth"} *`)) {

        $('.dropdown-btn-fourth').style.display = 'block';
        $('.dropdown-btn-up-fourth').style.display = 'none';
        $('.content-link-dropdown-fourth').style.display = 'none';
      };

      /**
       * Botones quinto
       */
      if(e.target.matches(".dropdown-btn-up-fifth") 
        || e.target.matches(`${".dropdown-btn-up-fifth"} *`)) {

        $('.dropdown-btn-fifth').style.display = 'block';
        $('.dropdown-btn-up-fifth').style.display = 'none';
        $('.content-link-dropdown-fifth').style.display = 'none';
      };
    }
  );
};