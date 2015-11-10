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
    $(".top-btn").click(function(){
        $(".tag").hide();
        $(".top").show();
    });
    $(".all-btn").click(function(){
        $(".tag").hide();
        $(".tag").show();
    });
    $(".html-btn").click(function(){
        $(".tag").hide();
        $(".html-tag").show();
    });
    $(".css-btn").click(function(){
        $(".tag").hide();
        $(".css-tag").show();
    });
});