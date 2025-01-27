import { getRetrieveReservationFormData } from "../../Components/getRetrieveReservationFormData";
import { submitRetrieveReservationForm } from "../../Services/api";
import { showToast } from "../../Utils/utils";

document.addEventListener("DOMContentLoaded", () => {
  const retrieveResForm = document.getElementById("retrieve-reservation-form") as HTMLFormElement;

  retrieveResForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const { email, code } = getRetrieveReservationFormData();

    const reservationData = {
      email: email,
      code: code,
    };

    sessionStorage.setItem('reservationData', JSON.stringify(reservationData));

    try {
      const result = await submitRetrieveReservationForm(email, code);
      console.log("Codice iviato con successo!", result);
      localStorage.setItem("reservationDetails", JSON.stringify(result));
      showToast("Richiesta inoltrata con successo!", "success");
      window.location.href = "/src/Pages/updateBooking/update-booking.html";
      retrieveResForm.reset();
    } catch (error) {
      showToast("Problemi durante l'invio della richiesta, riprova tra poco!", "error");
      console.error("Errore durante l'invio dei dati", error);
    }
  });
});
