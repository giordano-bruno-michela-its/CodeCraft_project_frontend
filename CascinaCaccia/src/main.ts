import { getBookingFormData } from "./Components/bookingFormHandler";
import { getFormDataInfo } from "./Components/infoFormHandler";
import { initNavbar } from "./Components/navbar";
import { submitBookingForm, submitNewsletterData } from "./Services/api";
import { toggleColorblindFilter } from "./Utils/colorBlindFilter";
import { toggleDarkMode } from "./Utils/darkMode";
import { setupActivitiesToggle, setupOfferCards } from "./Utils/utils";
import { toggleAnswer } from "./Utils/utils";
import { submitFormData } from "./Services/api";
import {activityCards } from "./Utils/utils"
import { activityCarousel } from "./Utils/utils"
import { getNewsletterFormData } from "./Components/newsletterFormHandler";

document.addEventListener("DOMContentLoaded", () => {
  //Navbar:
  initNavbar();

  // Darkmode:
  toggleDarkMode();

  // Colorblind Filter
  toggleColorblindFilter();

  
  activityCards();
  activityCarousel()


  // Offers Section
  setupOfferCards();

  // Faq Section
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question, index) => {
    question.addEventListener("click", () => toggleAnswer(index));
  });

  // BOOKING FORM
  const bookingForm = document.getElementById("bookingForm") as HTMLFormElement;
  const activitiesToggle = document.getElementById("activitiesToggle") as HTMLButtonElement;
  const activitiesContainer = document.getElementById("activitiesContainer") as HTMLDivElement;

  setupActivitiesToggle(activitiesToggle, activitiesContainer);

  bookingForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // get data from the html Form
    const formData = getBookingFormData(bookingForm, activitiesContainer);

    // Handling form data (submit)
    try {
      const result = await submitBookingForm(formData);
      console.log("Dati inviati con successo:", result);
      alert("La tua richiesta è stata inviata con successo!");
      bookingForm.reset()
    } catch (error) {
      console.error("Errore durante l'invio dei dati:", error);
      alert("Si è verificato un errore durante l'invio della tua richiesta");
    }
  });
});

//  INFORMATION FORM
document.addEventListener("DOMContentLoaded", () => {
  const infoForm = document.getElementById("infoForm") as HTMLFormElement;
  const activitiesToggle = document.getElementById("info-form-activitiesToggle") as HTMLButtonElement;
  const activitiesContainer = document.getElementById("infoActivitiesContainer") as HTMLDivElement;

  setupActivitiesToggle(activitiesToggle, activitiesContainer);

  infoForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // get data from the html Form
    const formData = getFormDataInfo(infoForm, activitiesContainer);

    // Handling form data (submit)
    try {
      const result = await submitFormData(formData);
      console.log("Dati inviati con successo:", result);
      alert("La tua richiesta è stata inviata con successo!");
      infoForm.reset();
    } catch (error) {
      console.error("Errore durante l'invio dei dati:", error);
      alert("Si è verificato un errore durante l'invio della tua richiesta.");
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
      alert("La tua richiesta è stata inviata con successo!");
    } catch (error) {
      console.error("Errore durante l'invio dei dati:", error);
      alert("Si è verificato un errore durante l'invio della tua richiesta.");
    }
  });
});


// submitNewsletterData