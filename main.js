//scroll

$(window).on("scroll",function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header')
    }
});

var typed = new Typed('#txt', {
    strings: ['My Portfolio'],
    typeSpeed: 100,
  });