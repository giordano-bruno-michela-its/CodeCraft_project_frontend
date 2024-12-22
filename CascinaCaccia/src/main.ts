import { getFormData } from "./Components/infoFormHandler";
import { submitFormData } from "./Services/api";
import { setupActivitiesToggle } from "./Utils/utils";

// gettting html elements
document.addEventListener("DOMContentLoaded", () => {
  const infoForm = document.getElementById("infoForm") as HTMLFormElement;
  const activitiesToggle = document.getElementById("activitiesToggle") as HTMLButtonElement;
  const activitiesContainer = document.getElementById("activitiesContainer") as HTMLDivElement;

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
