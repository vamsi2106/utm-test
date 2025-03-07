$(document).ready(function() {


    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("sticky-header");
        } else {

            $(".header").removeClass("sticky-header");
        }
    });

});



$(document).ready(function() {

     $("#villas-slider").owlCarousel({
         loop:true,
            autoplay:true,
            nav:true,
        responsive:{
             0:{
                items:1
            },

            767:{
                items:2
            },
            
            1140:{
                items:2.5
            }
        }
    });

    $("#plots-slider").owlCarousel({
            loop:true,
            autoplay:true,
            nav:true,
            responsive:{
                0:{
                    items:1
                },

                767:{
                    items:2
                },
                
                1140:{
                    items:2.5
                }
            }
        });


    $("#community-slider").owlCarousel({
            loop:true,
            autoplay:true,
            nav:false,
            responsive:{
                0:{
                    items:1
                },

                767:{
                    items:2
                },
                
                1140:{
                    items:3
                }
            }
        });

});

