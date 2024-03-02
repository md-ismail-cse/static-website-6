/*=============================================
                Preloader
===============================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/*=============================================
                Wow
===============================================*/
$(function () {
    new WOW().init();
});

/*=============================================
                Home
===============================================*/
$(function () {
    $(".anim-slider").animateSlider({
        autoplay: true,
        interval: 8000,
        animations: {
            0: //Slide No1
            {
                img: {
                    show: "fadeInDown",
                    hide: "fadeOutUp",
                    delayShow: "delay1s"
                },
                h1: {
                    show: "slideInLeft",
                    hide: "fadeOutLeft",
                    delayShow: "delay1-5s"
                },
                p: {
                    show: "slideInRight",
                    hide: "fadeOutRight",
                    delayShow: "delay1-5s"
                },
                a: {
                    show: "fadeInUp",
                    hide: "fadeOutDown",
                    delayShow: "delay2s"
                }
            },
            1: //Slide No2
            {
                img: {
                    show: "fadeInDownBig",
                    hide: "fadeOutUp",
                    delayShow: "delay1s"
                },
                h1: {
                    show: "slideInLeft",
                    hide: "fadeOutLeft",
                    delayShow: "delay1-5s"
                },
                p: {
                    show: "slideInRight",
                    hide: "fadeOutRight",
                    delayShow: "delay1-5s"
                },
                a: {
                    show: "fadeInUpBig",
                    hide: "fadeOutDown",
                    delayShow: "delay2s"
                }
            },
            2: //Slide No3
            {
                img: {
                    show: "fadeInDownBig",
                    hide: "fadeOutUp",
                    delayShow: "delay1s"
                },
                h1: {
                    show: "slideInLeft",
                    hide: "fadeOutLeft",
                    delayShow: "delay1-5s"
                },
                p: {
                    show: "slideInRight",
                    hide: "fadeOutRight",
                    delayShow: "delay1-5s"
                },
                a: {
                    show: "fadeInUpBig",
                    hide: "fadeOutDown",
                    delayShow: "delay2s"
                }
            }
        }
    });
});

/*======================================
                Navigation 
========================================*/
$(function () {
    window.onscroll = function () {
        myFunction()
    };

    var header = document.getElementById("site-top-nav");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            $("#back-to-top").fadeIn();
        } else {
            header.classList.remove("sticky");
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 60
        }, 1250);
    });
});
// Close mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});

/*====================================================
                        Services
====================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*=============================================
                Team
===============================================*/
$(function () {
    $("#team-items").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            481: {
                items: 2
            },
            // breakpoint from 767 up
            767: {
                items: 2
            },
            // breakpoint from 991 up
            992: {
                items: 3
            }
        }
    });
});

/*=============================================
                Portfolio
===============================================*/
$(window).on('load', function () {

    // Initialize Isotope
    $("#portfolio-container").isotope({});

    // filter items on button click
    $("#portfolio-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#portfolio-container").isotope({
            filter: filterValue
        });

        // active button
        $("#portfolio-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* Image Gallery */
$(function () {
    $('.img-view').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*=============================================
                News
===============================================*/
$(function () {
    $("#news-items").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 1
            }
        }
    });
});