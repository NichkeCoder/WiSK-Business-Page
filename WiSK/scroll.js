let bgQuote = document.querySelector('.quote');
let bgServices = document.querySelector('.services');

window.addEventListener('scroll', function () {
    var val = window.scrollY;

    bgQuote.style.backgroundPositionY = val * 0.5 + 'px';
    bgServices.style.backgroundPositionY = val * 0.5 + 'px';
});

$(window).on('scroll', function() {
    var y = window.scrollY;
    if (y >= 1000) {
        $('nav').addClass('light-grey');
        $('nav').removeClass('transparent');
    }
    else if (y >= 850){
        $('nav').addClass('transparent');
        $('nav').removeClass('light-grey');
    }
    else if (y > 0) {
        $('nav').addClass('light-grey');
        $('nav').removeClass('transparent');
    }
    else {
        $('nav').removeClass('light-grey');
        $('nav').removeClass('transparent');
    }
});