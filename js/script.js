$(document).ready(function () {
  // Start NiceScroll
  $("body").niceScroll({
    scrollspeed: 200,
    mousescrollstep: 40,
    zindex: 1,
    cursorborder: "none",
  });
  // End NiceScroll

  // Start Navbar
  $("nav .links ul li a").on("click", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .children()
      .removeClass("active");
  });
  // End Navbar

  // Start Header
  $(window).resize(function () {
    $(".header").height($(window).height());
    $(".owl-carousel .owl-nav button").css({
      top:
        ($(".owl-carousel").height() -
          $(".owl-carousel .owl-nav button").height()) /
        2,
    });
    $(".owl-carousel .owl-stage-outer").css({
      paddingTop: ($(window).height() - $(".owl-item.active").height()) / 2,
    });
  });
  $(".header").height($(window).height());

  // Start Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    // margin: 10,
    nav: true,
    dots: false,
    items: 1,
    onTranslated: function () {
      $(".owl-carousel .owl-stage-outer").css({
        paddingTop: ($(window).height() - $(".owl-item.active").height()) / 2,
      });
    },
  });
  $(".owl-carousel .owl-nav button").css({
    top:
      ($(".owl-carousel").height() -
        $(".owl-carousel .owl-nav button").height()) /
      2,
  });

  $(".owl-carousel .owl-stage-outer").css({
    paddingTop: ($(window).height() - $(".owl-item.active").height()) / 2,
  });
  // End Carousel

  // Start Services
  $("nav .links ul li a").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top,
      },
      900
    );
  });
  // End Services

  // Start Projects
  $(".projects-section .projects-menu ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  var mixer = mixitup(".projects-gallery");
});
