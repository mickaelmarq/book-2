// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');


if(typeof InstallTrigger !== 'undefined'){

  //IF Firefox

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

  $('.wrapper').addClass('scale-ok');

}

// $(window).scroll(function() {
//   $('.two-face__content').removeClass('max');
// });


//drag
var curDown = false,
    curXPos = 0;
$('.work__img-container').mousemove(function(m){
  if(curDown === true){
   $(this).scrollLeft($(this).scrollLeft() + (curXPos - m.pageX)/10);
  }
});

$('.work__img-container').mousedown(function(m){
  curDown = true;
  curXPos = m.pageX;
});

$('.work__img-container').mouseup(function(){
  curDown = false;
});
