import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

/**
 * Initializes the Swiper carousel with the given settings.
 */
export function initSwiper(): void {
  new Swiper(".activity-img-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      500: {
        spaceBetween: 24,
      },
    },
  });
}
