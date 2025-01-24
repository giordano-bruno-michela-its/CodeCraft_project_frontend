// Update booking form after retrieve reservation

import { getUpdateBknFormData } from "../../Components/getUpdateBookingFormData";
import { prefillFields } from "../../Utils/update-booking-reservation-prefill";



document.addEventListener("DOMContentLoaded", () => {
  const reservationDetails = JSON.parse(localStorage.getItem("reservationDetails") || "{}");

  prefillFields(reservationDetails);

  const form = document.getElementById("bookingForm") as HTMLFormElement;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const updatedData = getUpdateBknFormData();

    try {
      const URL = `http://localhost:8080/api/formreq/updatebooking/${reservationDetails.id}`;
      const response = await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        alert("Prenotazione aggiornata con successo!");
        form.reset();
        window.location.href = "../../index.html";
      } else {
        throw new Error("Errore durante l'aggiornamento della prenotazione");
      }
    } catch (error) {
      alert("Errore durante l'aggiornamento: ");
    }
  });
});
