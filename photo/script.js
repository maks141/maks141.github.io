$(document).ready(function() {
    $('.menu__burger').click(function(event) {
        $('.menu__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.menu ul').click(function(event) {
        $('.menu__burger,.menu').removeClass('active');
        $('body').removeClass('lock')
        ;})
});
