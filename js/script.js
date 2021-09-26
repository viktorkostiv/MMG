document.getElementById('menuOn').addEventListener('click', () => {
  document.querySelector('.nav').classList.add('active');
  document.querySelector('body').classList.add('active');
});
document.getElementById('menuOff').addEventListener('click', () => {
  document.querySelector('.nav').classList.remove('active');
  document.querySelector('body').classList.remove('active');
});
$(document).ready(function () {
    $('.head-slider').slick({
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });
    $('.services-slider').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
              }
            },
          ]
    });
    $('.partners-slider').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 769,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    });
    $('.coments-slider').slick({
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
              }
            },
          ]
    });
  });
