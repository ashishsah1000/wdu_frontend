$(document).ready(function() {
    $('.section').click(function() {
        $('.active_section').removeClass('active_section');
        $(this).addClass('active_section');
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $(window).resize(function() {
        var size = $(window).width();
        console.log(size);
        if (size <= 700) {
            $('.part_one').hide();
        } else {
            $('.part_one').show();
        }
    });
});

//vue controllling