/*************************** ANIMACION DE MENU***********************************************/
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });

/***************************** Animaciones de elementos ******************************************/
var $donCroc = $('.donCroc');
var $aDerechaIn = $('.aDerechaIn');
var $aTopIn = $('.aTopIn');
var $aIzqIn = $('.aIzqIn');
var $donPM = $('.donPM');
var $donFront = $('.donFront');
var $donDev = $('.donDev');



$donCroc.waypoint(function(direction){
  if (direction == 'down'){
    $donCroc.addClass("js-donCroc-animado");
  }else{
    $donCroc.removeClass("js-donCroc-animado");
  }
}, {offset:95} );


$aDerechaIn.waypoint(function(direction){
  if (direction == 'down'){
    $aDerechaIn.addClass("js-aDerechaIn-animado");
  }else{
    $aDerechaIn.removeClass("js-aDerechaIn-animado");
  }
}, {offset:450} );

$aDerechaIn.waypoint(function(direction){
  if (direction == 'down'){
    $aTopIn.addClass("js-aTopIn-animado");
  }else{
    $aTopIn.removeClass("js-aTopIn-animado");
  }
}, {offset:450} );

$aDerechaIn.waypoint(function(direction){
  if (direction == 'down'){
    $aIzqIn.addClass("js-aIzqIn-animado");
  }else{
    $aIzqIn.removeClass("js-aIzqIn-animado");
  }
}, {offset:450} );

$donPM.waypoint(function(direction){
  if(direction == 'down'){
    $donPM.addClass('js-donPM');
  }else{
    $donPM.removeClass('js-donPM');
  }
}, {offset:450});

$donFront.waypoint(function(direction){
  if(direction == 'down'){
    $donFront.addClass('js-donFront')
  }else{
    $donFront.removeClass('js-donFront')
  }
}, {offset:450});

$donDev.waypoint(function(direction){
  if(direction == 'down'){
    $donDev.addClass('js-donDev')
  } else {
    $donDev.removeClass('js-donDev')
  }
}, {offset:450})







