$(document).ready(function() {
    $('.section').click(function() {
        $('.active_section').removeClass('active_section');
        $(this).addClass('active_section');
    });
    $('.desk_tab').click(function() {
        $('.desk_active').removeClass('desk_active');
        $(this).addClass('desk_active');
    });
    // for liking for the posts
    $('.like').hide();
    $('.unlike').click(function() {
        $(this).siblings(".like").show();
        $(this).hide();
    });
    $('.like').click(function() {
        $(this).siblings(".unlike").show();
        $(this).hide();
    });
    //nested comments liking
    $(".unlike_n").hide();
    $(".like_n").click(function() {
        $(this).siblings(".unlike_n").show();
        $(this).hide();
    });
    $(".unlike_n").click(function() {
        $(this).siblings(".like_n").show();
        $(this).hide();
    });
    //  for comment section
    $(".comments").hide();
    $("#comment").click(function() {
        if ($(this).parent().siblings(".comments").is(":hidden"))
            $(this).parent().siblings(".comments").slideDown("fast");
        else
            $(this).parent().siblings(".comments").hide();
    });
    $('.tools')
        .popup({
            inline: false

        });
    $("#rateYo").rateYo({
        starWidth: "30px",
        rating: 3.2,
        readOnly: true
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