// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');

$(function() {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});

if(typeof InstallTrigger !== 'undefined'){
  $('.work__img-container').scroll(function() {
    var offset = -($(this).scrollLeft());
    var asside = $(this).closest('.work').find('.two-face__scroll');
    asside.css('left', (offset + 20)+'px');
    if(offset >= 100){
      $(this).closest('.two-face__content').addClass('max');
    }else{
      $(this).closest('.two-face__content').removeClass('max');
    }
  });
}else{
  $('.work__img-container').scroll(function() {
    var offset = -($(this).scrollLeft() - $(this).prop("scrollWidth") + $(this).innerWidth());
    var asside = $(this).closest('.work').find('.two-face__scroll');
    console.log($(this).scrollLeft());
    asside.css('left', (offset + 20)+'px');
    if(offset >= 100){
      $(this).closest('.two-face__content').addClass('max');
    }else{
      $(this).closest('.two-face__content').removeClass('max');
    }
  });
}

// $(window).scroll(function() {
//   $('.two-face__content').removeClass('max');
// });

var curDown = false,
    curXPos = 0;
$('.work__img-container').mousemove(function(m){
  if(curDown === true){
   $(this).scrollLeft($(this).scrollLeft() + (curXPos - m.pageX)/4);
   console.log($(this).scrollLeft());
   console.log((curXPos - m.pageX));
  }
});

$('.work__img-container').mousedown(function(m){
  curDown = true;
  curXPos = m.pageX;
});

$('.work__img-container').mouseup(function(){
  curDown = false;
});
