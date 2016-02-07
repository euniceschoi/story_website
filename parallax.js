$(document).ready(function() {
  $(window).bind('scroll',function(e){
      parallaxScroll();
    // redrawDotNav();
    });

})
  function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  $('#bg-1').css('top',(0-(scrolled*.25))+'px');
  $('#bg-2').css('top',(0-(scrolled*.5))+'px');
  // $('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}