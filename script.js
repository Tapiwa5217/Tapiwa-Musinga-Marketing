var navMenu = document.querySelector('#nav-header-section nav'); 
//var navMenu = document.querySelector('#nav-header-section nav'); 
var hamburgerMenu = document.querySelector('#nav-header-section #hamburger-menu'); 

let open = false;

hamburgerMenu.addEventListener('click', function() {
   // navMenu.classList.toggle('open');
   if (!open) {
       navMenu.style.height = '160px';

       open = true;
   }

   else {
    navMenu.style.height = '0';

    open = false;
   }


})