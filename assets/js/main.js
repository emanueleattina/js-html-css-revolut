$(document).ready(function () {
    var aDrop = $('.nav-right ul li');
    var divDrop = $('.nav-right ul div');

    aDrop.mouseover(function () { 
        // console.log($(this).siblings());
        $(this).children('div').addClass('active')
    });

    aDrop.mouseleave(function () { 
        // console.log($(this).siblings());
        $(this).children('div').removeClass('active')
    });

});

