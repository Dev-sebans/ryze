$(document).ready(function() {

    $('.first-button').on('click', function() {

        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function() {

        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function() {

        $('.animated-icon3').toggleClass('open');
    });
});


var $slider = $('.work-slider');
if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');

    var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text('0' + currentSlide)
    };

    $slider.on('init', function(event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000
    });
}

$('.work-img-slider').slick({
    infinite: true,
    slidesToShow: 1.35,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
});
$('.carousal--blog').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// AJ

$('[tabtoggle]').click(function() {
    var tab_in = $(this).attr('tabtoggle');
    $('[tabin]').removeClass('active');
    $('.tab-line-box--anchor').removeClass('active');
    $('[tabin="'+ tab_in +'"]').addClass('active');
    $(this).addClass('active')
});
$('[accordion-head]').click(function() {
    $(this).siblings('[accordion-body]').slideToggle();
})

$('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('.navbar-toggler').addClass('disabled');
    setTimeout(function() {
        $('.navbar-toggler').removeClass('disabled');
    }, 1000);
})