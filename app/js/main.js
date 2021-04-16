$(function() {
    $('.aside__btn-row').on('click',
        function() {
            $('.aside__hidden, .aside__btn-row').toggleClass('active');
            $('body').toggleClass('lock')
        });
});