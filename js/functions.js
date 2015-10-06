var $document = $(document),
    windowHeight = $(window).height(),
    windowWidth = $(window).width();

$(document).scroll(function() {
    if ($document.scrollTop() >= (windowHeight * 0.8)) {
    // user scrolled 50 pixels or more;
    // do stuff
    $(".navi_fade").fadeIn(700);
    }
    else {
     $(".navi_fade").fadeOut(300);
    }
});

$(document).ready(function() {
  $(".scroll").click(function(event){   
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
  });
});

