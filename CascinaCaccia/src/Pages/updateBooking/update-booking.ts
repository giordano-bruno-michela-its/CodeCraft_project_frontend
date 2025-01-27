import { getUpdateBknFormData } from "../../Components/getUpdateBookingFormData";
import { prefillFields } from "../../Utils/update-booking-reservation-prefill";
import { showToast } from "../../Utils/utils";

// Update booking form after retrieve reservation
document.addEventListener("DOMContentLoaded", () => {
  const reservationDetails = JSON.parse(localStorage.getItem("reservationDetails") || "{}");
  const reservationData = JSON.parse(sessionStorage.getItem("reservationData") || "{}");

  prefillFields(reservationDetails);

  const form = document.getElementById("bookingForm") as HTMLFormElement;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const updatedData = getUpdateBknFormData();
    console.log(updatedData);

    const body = {
      codeEmailRequest: {
        email: reservationData.email,
        code: reservationData.code,
      },
      formBooking: updatedData,
    };

    console.log(body);

    try {
      const URL = `http://localhost:8080/api/formreq/updatefromcode`;
      const response = await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        showToast("Prenotazione modificata con successo!", "success");
        form.reset();
        setTimeout(() => {
          // window.location.href = "../../../index.html";
        }, 2500);
      } else {
        throw new Error("Errore durante l'aggiornamento della prenotazione");
      }
    } catch (error) {
      showToast("Problemi durante l'invio della richiesta, riprova tra poco!", "error");
      console.error(error);
    }
  });
  localStorage.removeItem("reservationDetails");
});
