(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $('.preloader').delay(500).fadeOut(500);

        //02. Isotope Initialize
        function isotopeInit() {
            $('.performance_box_wrapper').isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                }
            });
        }
        isotopeInit();
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });


        //06. magnific Popup Initialize
        function magnificPopupInit() {
            $('.content a').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
        magnificPopupInit();

        //hero Slider Initialize
        $('.owl-carousel.hero_slider').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: true,
            smartSpeed: 2000,
        });

        //progretti Slider Initialize
        $('.owl-carousel.progretti_slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            navText: ['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },

                992: {
                    items: 2,
                }
            },
        });

        //news Slider Initialize
        $('.owl-carousel.news_slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            dots: false,
            nav: true,
            navText: ['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
        });

        //news Slider Initialize
        $('.owl-carousel.lavoriano_slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            
            responsive: {
                0: {
                    dots: true,
                    nav: false,
                },

                768: {
                    dots: false,
                    nav: true,
                    navText: ['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
                }
            },
        });


        //we work with Slider Initialize

        $('.owl-carousel.we-work-with-slide').owlCarousel({
            loop:true,
            center:true,
            margin:50,
            responsiveClass:true,
            nav:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true,
                    navText: ['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
                    loop:true
                }
            }
        })





        function aosinit(){
            AOS.init({
              offset: 100,
              delay: 0,
              duration: 600,
              easing: 'ease',
            });
        }
        aosinit();
        


        //11. Video Popup Initialize
        function videoPopupInit() {
            $('#play-video').magnificPopup({
                type: 'iframe'
                
            });
        }
        videoPopupInit();
    });

})(jQuery);