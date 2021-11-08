$(document).ready(function () {
    $('.services-slider-two').slick({
      dots: false,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
    $('.services-slider-one').slick({
      dots: false,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
});
window.addEventListener('DOMContentLoaded', function () {
  function textAnimation() {
    setTimeout(() => {
      document.querySelectorAll('.head-block').forEach((e) => {
        e.classList.add('active');
      });
    }, 500);
    setTimeout(() => {
      document.querySelectorAll('.text-one').forEach((e) => {
        e.classList.add('active');
      });
    }, 1000);
    setTimeout(() => {
      document.querySelectorAll('.text-two').forEach((e) => {
        e.classList.add('active');
      });
    }, 2000);
  }
  textAnimation();
});