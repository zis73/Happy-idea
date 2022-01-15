const swiper = new Swiper('.services-swiper', {
  //Бесконечная прокрутка
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed:0,
  autoplay:{
    delay:0,
    disableOnInteraction: false
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween:0,
      speed:2000,
      autoplay:{
        delay:2500,
        disableOnInteraction: false
      },
    },
    480: {
      slidesPerView: 1,
      spaceBetween:0,
      speed:0,
      autoplay:{
        delay:0,
        disableOnInteraction: false
      },
    },
    769: {
      slidesPerView: 1,
      spaceBetween:0,
      speed:0,
      autoplay:{
        delay:0,
        disableOnInteraction: false
      },
    },
  },
  // autoHeight: true,
  // slidesPerView: 1,
  // centeredSlides: true,

  // loopedSlides:3,
  // //Автопрокрутка
  // autoplay:{
  //   delay:3000,
  //   disableOnInteraction: false
  // },
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true
  // }
});
const swiper2 = new Swiper('.prices-swiper', {
  //Бесконечная прокрутка
  loop: true,
  spaceBetween: 100,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed:0,
  autoplay:{
    delay:0,
    disableOnInteraction: false
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween:0,
      speed:2000,
      autoplay:{
        delay:2500,
        disableOnInteraction: false
      },
    },
    480: {
      slidesPerView: 1,
      spaceBetween:0,
      speed:0,
      autoplay:{
        delay:0,
        disableOnInteraction: false
      },
    },
    769: {
      slidesPerView: 1,
      spaceBetween:0,
      speed:0,
      autoplay:{
        delay:0,
        disableOnInteraction: false
      },
    },
  },
  // autoHeight: true,
  // slidesPerView: 1,
  // centeredSlides: true,

  // loopedSlides:3,
  // //Автопрокрутка
  // autoplay:{
  //   delay:5000,
  //   disableOnInteraction: false
  // },
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true
  // }
});
const swiper3 = new Swiper('.clients-swiper', {
  //Бесконечная прокрутка
  loop: true,
  spaceBetween: 100,
  // autoHeight: true,
  slidesPerView: 5,
  // centeredSlides: true,

  // loopedSlides:1,
  //Автопрокрутка
  speed:3000,
  autoplay:{
    delay:0,
    disableOnInteraction: false
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween:60,
      speed:1200,
      autoplay:{
        delay:1800,
        disableOnInteraction: false
      },
    },
    480: {
      slidesPerView: 4,
      spaceBetween:60,
      speed:1200,
      autoplay:{
        delay:1800,
        disableOnInteraction: false
      },
    },
    769: {
      slidesPerView: 5,
      spaceBetween:60,
      speed:1200,
      autoplay:{
        delay:1800,
        disableOnInteraction: false
      },
    },
  },
});
const swiper4 = new Swiper('.hello-block-swiper', {
  //Бесконечная прокрутка
  loop: true,
  // autoHeight: true,
  // centeredSlides: true,

  // loopedSlides:1,
  //Автопрокрутка
  speed:2000,
  autoplay:{
    delay:1800,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  
});
document.querySelector('video').playbackRate = 0.65;