$(function() {
    $('.aside__btn-row').on('click',
        function() {
            $('.aside__hidden, .aside__btn-row').toggleClass('active');
            $('body').toggleClass('lock')
        });
    $('.slider__inner').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        cssEase: 'linear',
        prevArrow: '<button class="slick-arrow arrow-prev"><img src="images/models/icons/arrow-left.svg" alt="prev arrow" /></button>',
        nextArrow: '<button class="slick-arrow arrow-next"><img src="images/models/icons/arrow-right.svg" alt="next arrow" /></button>',
        responsive: [{
            breakpoint: 1300,
            settings: {
                // autoplay: true,
                // autospeed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, ]
    });
    $('.menu__btn').on('click',
        function() {
            $('.menu__inner-list').slideToggle();
        });
});