$(document).ready(function () {
    var aDrop = $('.nav-right ul li');

    aDrop.hover(function () { 
        // console.log($(this).siblings());
        $(this).children('.dropdown').toggleClass('active');
    });

    aDrop.hover(function() {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
          $(this).children("div").stop().slideDown(300);
        } else {
          $(this).children("div").stop().slideUp(300);
        }
      });

    // aDrop.mouseover(function () { 
    //     // console.log($(this).siblings());
    //     $(this).children('.dropdown').addClass('active')
    // });

    // aDrop.mouseleave(function () { 
    //     // console.log($(this).siblings());
    //     $(this).children('.dropdown').removeClass('active')
    // });

});

