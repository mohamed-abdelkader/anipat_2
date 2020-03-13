let openMenu = document.querySelector('.mega_menu'),
    btnMenu = document.querySelector('.btn_menu');

btnMenu.onclick = function () {
  if (openMenu.style.maxHeight){
  openMenu.style.maxHeight = null;
} else {
  openMenu.style.maxHeight = '350px';
}

}
// $(function () {
//   $('.btn_menu').on('click', function () {
//     $('.mega_menu').slideToggle();
//   });
// });

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
});



var myNav = document.querySelector('.header_area_bottom');

window.onscroll = function () {
  'use strict';
  if(window.pageYOffset >= 250) {
    myNav.classList.add('sticky');
  } else {
    myNav.classList.remove('sticky');
  }
}


var mobileDrop = document.getElementsByClassName('mobile_drop'),
    i;
for (i = 0; i < mobileDrop.length; i++) {
  mobileDrop[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
  });
}
