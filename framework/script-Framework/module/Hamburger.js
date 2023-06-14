const d = document;

// * Función que hace que funcione el menu hamburgeza.
// * Function that makes the hamburger menu work.
export function Hamburger(){

  /**
   * Variables con las etiquetas html.
  */
  const $buttonHamburger = d.querySelector(".btn-hamburger");
  const $buttonX = d.querySelector(".btn-x");
  const $buttonHamburger2 = d.querySelector(".btn-hamburger-2");
  const $buttonX2 = d.querySelector(".btn-x-2");
  const $trasitionHeader1 = d.querySelector(".header-trasition-1");
  const $trasitionHeader2 = d.querySelector(".header-trasition-2");

  /**
   * Función que ejecutara el ocultar y mostrar el header
   * con los links de navegación.
  */

  console.log($buttonHamburger)
  d.addEventListener("click", e => {

    /**
     * * Este es para los botones hamburger derechos
    */
    if(e.target.matches(".btn-hamburger") 
      || e.target.matches(`${".btn-hamburger"} *`)){
      $buttonHamburger.style.display = "none";
      $buttonX.style.display = "block";

      $trasitionHeader1.style.transform = "translateX(0)";
      $trasitionHeader1.style.opacity = "1";
    }

    if(e.target.matches(".btn-x") 
      || e.target.matches(`${".btn-x"} *`)){
      $buttonHamburger.style.display = "block";
      $buttonX.style.display = "none";

      $trasitionHeader1.style.transform = "translateX(-100%)";
      $trasitionHeader1.style.opacity = "0";
    }

    /**
     * * Este es para los botones hamburger izquierdos
    */
    if(e.target.matches(".btn-hamburger-2") 
      || e.target.matches(`${".btn-hamburger-2"} *`)){
      $buttonHamburger2.style.display = "none";
      $buttonX2.style.display = "block";

      $trasitionHeader2.style.transform = "translateX(0)";
      $trasitionHeader2.style.opacity = "1";
    }
    
    if(e.target.matches(".btn-x-2") 
      || e.target.matches(`${".btn-x-2"} *`)){
      $buttonHamburger2.style.display = "block";
      $buttonX2.style.display = "none";

      $trasitionHeader2.style.transform = "translateX(100%)";
      $trasitionHeader2.style.opacity = "0";
    }

  });

};