$(document).ready(function(){
  $(".home-sliders").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    dots: true,
    smartSpeed: 1000,
    navText: ['&#10094;', '&#10095;'] // Left & right arrows inside slides
  });
});
