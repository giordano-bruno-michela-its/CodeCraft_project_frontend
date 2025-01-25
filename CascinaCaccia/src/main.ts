import { getBookingFormData } from "./Components/bookingFormHandler";
import { getFormDataInfo } from "./Components/infoFormHandler";
import { initNavbar } from "./Components/navbar";
import { submitBookingForm, submitNewsletterData } from "./Services/api";
import { toggleColorblindFilter } from "./Utils/colorBlindFilter";
import { toggleDarkMode } from "./Utils/darkMode";
import { enableDisableSbmtBtnBookingForm, enableDisableSbmtBtnInfoForm, setupActivitiesToggle, setupOfferCards, setUpPaymentMethodsBtns, showToast } from "./Utils/utils";
import { toggleAnswer } from "./Utils/utils";
import { submitFormData } from "./Services/api";
import { activityCards } from "./Utils/utils";
// import { activityCarousel } from "./Utils/utils"
import { getNewsletterFormData } from "./Components/newsletterFormHandler";

// import Swiper JS
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  //Navbar:
  initNavbar();

  // Darkmode:
  toggleDarkMode();

  // Colorblind Filter
  toggleColorblindFilter();

  activityCards();
  // activityCarousel()

  // Offers Section
  setupOfferCards();

  setUpPaymentMethodsBtns();

  // Faq Section
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question, index) => {
    question.addEventListener("click", () => toggleAnswer(index));
  });

  // BOOKING FORM
  const bookingForm = document.getElementById("bookingForm") as HTMLFormElement;
  const activitiesToggle = document.getElementById("activitiesToggle") as HTMLButtonElement;
  const activitiesContainer = document.getElementById("activitiesContainer") as HTMLDivElement;
  
  // toggles the activity age limit banner when the checkbox is checked
  const limitedActivityCheck = document.querySelector('#bookingForm #activitiesContainer input[value="8"]') as HTMLInputElement;
  const limiteActivityBanner = document.querySelector('#bookingForm .activity-age-warning') as HTMLDivElement;

  limitedActivityCheck.addEventListener('change', () => {
    limiteActivityBanner.classList.toggle('hidden');
  });

  setupActivitiesToggle(activitiesToggle, activitiesContainer);
  enableDisableSbmtBtnBookingForm();

  bookingForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // get data from the html Form
    const formData = getBookingFormData(activitiesContainer);

    // Handling form data (submit)
    try {
      const result = await submitBookingForm(formData);
      console.log("Dati inviati con successo:", result);
      showToast("Richiesta inoltrata con successo!", "success");
      bookingForm.reset();
    } catch (error) {
      console.error("Errore durante l'invio dei dati:", error);
      showToast("Problemi durante l'invio della richiesta, riprova tra poco!", "error");
    }
  });
});

//  INFORMATION FORM
document.addEventListener("DOMContentLoaded", () => {
  const infoForm = document.getElementById("infoForm") as HTMLFormElement;
  const activitiesToggle = document.getElementById("info-form-activitiesToggle") as HTMLButtonElement;
  const activitiesContainer = document.getElementById("infoActivitiesContainer") as HTMLDivElement;

  const isHidden = window.getComputedStyle(activitiesContainer).display === "none";
  activitiesToggle.textContent = isHidden ? "Mostra Attività" : "Nascondi Attività";
  activitiesToggle.setAttribute("aria-expanded", (!isHidden).toString());

  setupActivitiesToggle(activitiesToggle, activitiesContainer);
  enableDisableSbmtBtnInfoForm();

  infoForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // get data from the html Form
    const formData = getFormDataInfo(infoForm, activitiesContainer);

    // Handling form data (submit)
    try {
      const result = await submitFormData(formData);
      console.log("Dati inviati con successo:", result);
      showToast("Richiesta inoltrata con successo!", "success");
      infoForm.reset();
    } catch (error) {
      console.error("Errore durante l'invio dei dati:", error);
      showToast("Problemi durante l'invio della richiesta, riprova tra poco!", "error");
    }
  });
});

//  NEWSLETTER FORM
document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.getElementById("newsletter-email-form") as HTMLFormElement;

  newsletterForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // get data from the html Form
    const newsletterData = getNewsletterFormData();

    // Handling form data (submit)
    try {
      const result = await submitNewsletterData(newsletterData);
      console.log("Dati inviati con successo:", result);
      showToast("Richiesta inoltrata con successo!", "success");
      newsletterForm.reset();
    } catch (error) {
      console.error(" Errore durante l'invio dei dati:", error);
      showToast("Problemi durante l'invio della richiesta, riprova tra poco!", "error");
    }
  });
});

// Swiper.js carousel script

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
      spaceBetween: 20,
    },
  },
});
