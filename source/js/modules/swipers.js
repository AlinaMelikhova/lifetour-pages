import Swiper from "../vendor/swiper.js";

const initHeroSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-hero", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    speed: 300,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
    },
  });
};

const initToursSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-tours", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 300,

    navigation: {
      nextEl: ".swiper-button-next--tours",
      prevEl: ".swiper-button-prev--tours",
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
    },
  });
};

const initEducationSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-education", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 300,

    navigation: {
      nextEl: ".swiper-button-next--education",
      prevEl: ".swiper-button-prev--education",
    },

    breakpoints: {
      1200: {
        allowTouchMove: false,
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};

const initReviewSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-review", {
    direction: "horizontal",
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 15,
    speed: 300,

    navigation: {
      nextEl: ".swiper-button-next--review",
      prevEl: ".swiper-button-prev--review",
    },

    breakpoints: {
      1200: {
        allowTouchMove: false,
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
    },
  });
};

const initBenefitsSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-benefits", {
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    speed: 300,
    initialSlide: 2,

    navigation: {
      nextEl: ".swiper-button-next--benefits",
      prevEl: ".swiper-button-prev--benefits",
    },

    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
    },
  });
};

const initGalleruSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-gallery", {
    direction: "horizontal",
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 5,
    speed: 300,

    navigation: {
      nextEl: ".swiper-button-next--gallery",
      prevEl: ".swiper-button-prev--gallery",
    },

    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
      768: {
        spaceBetween: 5,
      },

      320: {
        spaceBetween: 3,
      },
    },
  });
};

export const initSwipers = () => {
  initHeroSwiper();
  initToursSwiper();
  initEducationSwiper();
  initReviewSwiper();
  initGalleruSwiper();

  if (window.matchMedia("(min-width:1200px)").matches) {
    document.querySelector(".swiper-benefits").classList.add("swiper");
    document.querySelector(".benefits__list").classList.add("swiper-wrapper");
    Array.from(document.querySelectorAll(".benefits__item")).forEach((slide) =>
      slide.classList.add("swiper-slide")
    );
    initBenefitsSwiper();
  }
};
