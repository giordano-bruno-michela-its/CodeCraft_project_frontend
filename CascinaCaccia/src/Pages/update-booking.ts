document.addEventListener("DOMContentLoaded", () => {
  const reservationDetails = JSON.parse(localStorage.getItem("reservationDetails") || "{}");

  const startDate = new Date(reservationDetails.beginTime); // Assumi che sia parsabile in un oggetto Date
  const formattedStartDate = startDate.toISOString().split("T")[0]; // Ottieni solo YYYY-MM-DD

  const endDate = new Date(reservationDetails.endTime);
  const formattedEndDate = endDate.toISOString().split("T")[0];

  console.log(reservationDetails);
  console.log(reservationDetails.id);

  // Prefill input fields
  if (reservationDetails) {
    document.getElementById("startDate")?.setAttribute("value", formattedStartDate);
    document.getElementById("endDate")?.setAttribute("value", formattedEndDate);
    document.getElementById("name")?.setAttribute("value", reservationDetails.name);
    document.getElementById("surname")?.setAttribute("value", reservationDetails.surname);
    document.getElementById("boking-form-email")?.setAttribute("value", reservationDetails.email);
    document.getElementById("association")?.setAttribute("value", reservationDetails.association);
    document.getElementById("phoneNumber")?.setAttribute("value", reservationDetails.phoneNumber);
    const durationElement = document.getElementById("duration") as HTMLSelectElement;

    const options = Array.from(durationElement.options);

    // Trova l'opzione corrispondente all'ID
    const matchingOption = options.find((option) => parseInt(option.value) === reservationDetails.bookingDuration.id);

    if (matchingOption) {
      matchingOption.selected = true; // Seleziona l'opzione corrispondente
    } else {
      console.warn("Nessuna opzione trovata per l'ID specificato.");
    }

    document.getElementById("nChildren")?.setAttribute("value", reservationDetails.participantsQuantity);
    document.getElementById("nAdults")?.setAttribute("value", reservationDetails.guidesQuantity);
    const additionalInfoElement = document.getElementById("additionalInfo") as HTMLTextAreaElement;
    if (additionalInfoElement && reservationDetails.additionalInfo) {
      additionalInfoElement.textContent = reservationDetails.additionalInfo;
    }

    if (reservationDetails.activityType) {
      reservationDetails.activityType.forEach((activity: { id: number }) => {
        console.log("Activity ID:", activity.id);

        // Cerca il checkbox corrispondente usando l'ID dell'attività
        const checkbox = document.querySelector(`input[name="activities"][value="${activity.id}"]`) as HTMLInputElement;
        console.log("Checkbox trovata:", checkbox);

        if (checkbox) {
          checkbox.checked = true; // Seleziona il checkbox corrispondente
        } else {
          console.warn(`Checkbox non trovato per activity ID: ${activity.id}`);
        }
      });
    } else {
      console.warn("Nessuna attività trovata in reservationDetails.activityType.");
    }
  }

  const form = document.getElementById("bookingForm") as HTMLFormElement;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const updatedData = {
      startDate: (document.getElementById("startDate") as HTMLInputElement).value,
      endDate: (document.getElementById("endDate") as HTMLInputElement).value,
      name: (document.getElementById("name") as HTMLInputElement).value,
      surname: (document.getElementById("surname") as HTMLInputElement).value,
      email: (document.getElementById("boking-form-email") as HTMLInputElement).value,
      association: (document.getElementById("association") as HTMLInputElement).value,
      phoneNumber: (document.getElementById("phoneNumber") as HTMLInputElement).value,
      nChildren: parseInt((document.getElementById("nChildren") as HTMLInputElement).value),
      nAdults: parseInt((document.getElementById("nAdults") as HTMLInputElement).value),
      additionalInfo: (document.getElementById("additionalInfo") as HTMLTextAreaElement).value,
    };

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
