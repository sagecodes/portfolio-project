//Adds slow scrolling feature when page links clicked.
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Closes mobile drop down menu when nav link clicked
$(function () {
            $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
                    $('.navbar-toggle:visible').click();
            });
    });

// Shows and hides portfolio projects
$(document).ready(function(){
    $(".top").addClass('show');
    $(".top-btn").click(function(){
        $(".tag").removeClass('show');
        $(".top").addClass('show');
    });
    $(".all-btn").click(function(){
        $(".tag").removeClass('show');
        $(".tag").addClass('show');
    });
    $(".html-btn").click(function(){
        $(".tag").removeClass('show');
        $(".html-tag").addClass('show');
    });
    $(".css-btn").click(function(){
        $(".tag").removeClass('show');
        $(".css-tag").addClass('show');
    });
});

// add background to navbar on scroll
jQuery(window).scroll(function(){
    var fromTopPx = 55; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        jQuery('.navbar').addClass('scrolled');
    }else{
        jQuery('.navbar').removeClass('scrolled');
    }
});

