import { getRetrieveReservationFormData } from "../../Components/getRetrieveReservationFormData";
import { submitRetrieveReservationForm } from "../../Services/api";

document.addEventListener("DOMContentLoaded", () => {
    const retrieveResForm = document.getElementById("retrieve-reservation-form") as HTMLFormElement;
  
    retrieveResForm.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const { email, code } = getRetrieveReservationFormData();
  
      try {
        const result = await submitRetrieveReservationForm(email, code);
        console.log("Codice iviato con successo!", result);
        // Salva i dati della prenotazione in localStorage
        localStorage.setItem("reservationDetails", JSON.stringify(result));
        alert("Codice inviato con succeso");
        window.location.href = "./update-booking.html"; // url to the page that allow the user to modify booking
        // retrieveResForm.reset();
      } catch (error) {
        console.error("Errore durante l'invio dei dati", error);
        alert("Errore durante l'invio dei dati");
      }
    });
  });