import { getBookingFormData } from "./Components/bookingFormHandler";
import { getFormData } from "./Components/infoFormHandler";
import { submitBookingForm } from "./Services/api";
import { setupActivitiesToggle } from "./Utils/utils";
import { toggleAnswer } from "./Utils/utils";
import { submitFormData } from "./Services/api";


// gettting html elements bby BOOKING FORM
document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm") as HTMLFormElement;
  const activitiesToggle = document.getElementById("activitiesToggle") as HTMLButtonElement;
  const activitiesContainer = document.getElementById("activitiesContainer") as HTMLDivElement;

  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question, index) => {
    question.addEventListener("click", () => toggleAnswer(index));
  });

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
    } catch (error) {
      console.error("Errore durante l’invio dei dati:", error);
      alert("Si è verificato un errore durante l’invio della tua richiesta");
    }
  });
});




// gettting html elements BY INFORMATION FORM 
document.addEventListener("DOMContentLoaded", () => {
  const infoForm = document.getElementById("infoForm") as HTMLFormElement;
  const activitiesToggle = document.getElementById("info-form-activitiesToggle") as HTMLButtonElement;
  const activitiesContainer = document.getElementById("infoActivitiesContainer") as HTMLDivElement;

  setupActivitiesToggle(activitiesToggle, activitiesContainer);

  infoForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // get data from the html Form
    const formData = getFormData(infoForm, activitiesContainer);

    // Handling form data (submit)
    try {
      const result = await submitFormData(formData);
      console.log("Dati inviati con successo:", result);
      alert("La tua richiesta è stata inviata con successo!");
    } catch (error) {
      console.error("Errore durante l’invio dei dati:", error);
      alert("Si è verificato un errore durante l’invio della tua richiesta. Riprova più tardi.");
    }
  });
});
