function hamburger() {
    $('.hamburger').click(function() {
        $(this).parent().parent().toggleClass('active');
        $('body, html').toggleClass('hidden');
    });
}

function scrollTo() {
    $('ul li a[data-link]').click(function(e) {
        e.preventDefault();
        $('.nav-bar').removeClass('active');
        $('html, body').removeClass('hidden');
        let scrollTo = $(this).attr('data-link');
        let navHeight = $('.nav-bar').innerHeight() - 3;
        $('html, body').stop().animate({
            scrollTop: ($('section[data-section="' + scrollTo + '"]').offset().top) - navHeight
        }, 10);
    });
    let scrollBtn = $('.scroll-btn');
    $(window).scroll(function() {
        let scroll = $(this).scrollTop();
        console.log()
        if (scroll >= $(this).height()) {
            console.log('metia')
            scrollBtn.addClass('active')
        } else {
            console.log('naklebia')
            scrollBtn.removeClass('active')
        }
    })
    scrollBtn.click(function(e) {
        e.preventDefault();
        scrollToTop();
    })

    function scrollToTop() {
        $('body,html').animate({
            scrollTop: $('html,body').offset().top
        }, 10);
    }
}
$(function() {
    hamburger();
    scrollTo();
})