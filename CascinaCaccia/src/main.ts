// Components
import { getBookingFormData } from "./Components/bookingFormHandler";
import { getFormDataInfo } from "./Components/infoFormHandler";
import { initNavbar } from "./Components/navbar";
import { getNewsletterFormData } from "./Components/newsletterFormHandler";

// Services
import { submitBookingForm, submitNewsletterData, submitFormData } from "./Services/api";

// Generic Utilities
import {
  controlCheckboxForm,
  setupActivitiesToggle,
  setupOfferCards,
  setUpPaymentMethodsBtns,
  showToast,
  toggleAnswer,
  activityCards,
} from "./Utils/utils";

// Styles Utilities
import { toggleColorblindFilter } from "./Utils/colorBlindFilter";
import { toggleDarkMode } from "./Utils/darkMode";

// External Utilities
import { initSwiper } from "./Utils/swiperUtils";

// Entry point
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  toggleDarkMode();
  toggleColorblindFilter();
  initSwiper();
  activityCards();
  setupOfferCards();
  setUpPaymentMethodsBtns();
  controlCheckboxForm();

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
  const limiteActivityBanner = document.querySelector("#bookingForm .activity-age-warning") as HTMLDivElement;

  limitedActivityCheck.addEventListener("change", () => {
    limiteActivityBanner.classList.toggle("hidden");
  });

  setupActivitiesToggle(activitiesToggle, activitiesContainer);

  bookingForm.addEventListener("validatedSubmit", async (event) => {
    event.preventDefault();

    // get data from the html Form
    const formData = getBookingFormData(activitiesContainer);

    // Handling form data (submit)
    try {
      await submitBookingForm(formData);
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

  infoForm.addEventListener("validatedSubmit", async (event) => {
    event.preventDefault();

    // get data from the html Form
    const formData = getFormDataInfo(infoForm, activitiesContainer);

    // Handling form data (submit)
    try {
      await submitFormData(formData);
      showToast("Richiesta inoltrata con successo!", "success");
      infoForm.reset();
    } catch (error) {
      console.error("Errore durante l'invio dei dati:", error);
      showToast("Problemi durante l'invio della richiesta, riprova tra poco!", "error");
    }
  });

  //  NEWSLETTER FORM
  const newsletterForm = document.getElementById("newsletter-email-form") as HTMLFormElement;

  newsletterForm.addEventListener("validatedSubmit", async (event) => {
    event.preventDefault();

    // get data from the html Form
    const newsletterData = getNewsletterFormData();

    // Handling form data (submit)
    try {
      await submitNewsletterData(newsletterData);
      showToast("Richiesta inoltrata con successo!", "success");
      newsletterForm.reset();
    } catch (error) {
      console.error(" Errore durante l'invio dei dati:", error);
      showToast("Problemi durante l'invio della richiesta, riprova tra poco!", "error");
    }
  });
});
