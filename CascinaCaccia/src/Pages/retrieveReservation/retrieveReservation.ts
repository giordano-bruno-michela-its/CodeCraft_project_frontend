import { getRetrieveReservationFormData } from "../../Components/getRetrieveReservationFormData";
import { submitRetrieveReservationForm } from "../../Services/api";
import { showToast } from "../../Utils/utils";

document.addEventListener("DOMContentLoaded", () => {
  const retrieveResForm = document.getElementById("retrieve-reservation-form") as HTMLFormElement;

  retrieveResForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const { email, code } = getRetrieveReservationFormData();

    try {
      const result = await submitRetrieveReservationForm(email, code);
      console.log("Codice iviato con successo!", result);
      localStorage.setItem("reservationDetails", JSON.stringify(result));
      showToast("Richiesta inoltrata con successo!", "success");
      window.location.href = "/src/Pages/updateBooking/update-booking.html"; // url to the page that allow the user to modify booking
      retrieveResForm.reset();
    } catch (error) {
      showToast("Problemi durante l'invio della richiesta, riprova tra poco!", "error");
      console.error("Errore durante l'invio dei dati", error);
    }
  });
});
