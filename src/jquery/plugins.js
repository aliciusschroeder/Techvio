/** @format */

$(() => {
  $(".default-btn, .default-btn-one, .default-btn-two")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    });
});

$(window).on("load", function () {
  var portfolioIsotope = $(".protfolio-container").isotope({
    itemSelector: ".data",
  });
  $(".portfolio .buttons button").on("click", function () {
    $(".portfolio .buttons button").removeClass("active");
    $(this).addClass("active");
    portfolioIsotope.isotope({
      filter: $(this).data("filter"),
    });
  });
});

$(".testimonial-slider").owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  smartSpeed: 1000,
  margin: 20,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
