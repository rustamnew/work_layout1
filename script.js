$(document).ready(function(){
    let slidesToShow = 3

    if (window.innerWidth <= 1024) {
        slidesToShow = 2
    }
    if (window.innerWidth <= 768) {
        slidesToShow = 1
    }


    $('.slider').slick({
        slidesToShow,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
    });
    console.log('test')
});