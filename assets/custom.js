jQuery(document).ready(function ($) {
    $(".slick.marquee").slick({
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: "linear",
        slidesToShow: 3,
        draggable: true,
        focusOnSelect: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToScroll: 1,
        // variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});