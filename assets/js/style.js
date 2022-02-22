$(document).ready(function () {
    $('.center').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 3,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    });
});

