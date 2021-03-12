$(document).ready(function () {
    var aDrop = $('.nav-right ul li');
    var divDrop = $('.nav-right ul li .dropdown')

    aDrop.mouseover(function () { 
        $(this).children('.dropdown').toggleClass('active').show();
    });

    $(document).click(function(e) {
        if(!divDrop.is(e.target) && divDrop.has(e.target).length === 0) {
            divDrop.hide();
        }
    });


});

