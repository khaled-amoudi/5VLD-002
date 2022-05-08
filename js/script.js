var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, {html:true})
})
// $("[data-toggle=popover]").popover({html:true})

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
$(document).ready(function(){


  $('nav ul li a').click(function(){
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top /*- $('nav').outerHeight()*/
    }, 200);
  });

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  // Trigger Nice Scroll 
  // $('html').niceScroll({
  //   cursorcolor: '#ffc107',   /* change the color of cursor */
  //   cursorwidth: '12px',    /* change the width of cursor */
  //   cursorborder: '#ffc107',   /* change the color of border of the cursor */
  //   cursorborderradius: '2px',   /* change the border radius of cursor */
  //   zindex: [9999]
  // });

});
