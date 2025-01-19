document.addEventListener("DOMContentLoaded", () => {
  //   console.log("ciao");

  const reservationDetails = JSON.parse(localStorage.getItem("reservationDetails") || "{}");
  // Prefill input fields
  if (reservationDetails) {
    document.getElementById("startDate")?.setAttribute("value", reservationDetails.startDate);
    document.getElementById("endDate")?.setAttribute("value", reservationDetails.endDate);
    document.getElementById("name")?.setAttribute("value", reservationDetails.name);
    document.getElementById("surname")?.setAttribute("value", reservationDetails.surname);
    document.getElementById("boking-form-email")?.setAttribute("value", reservationDetails.email);
    document.getElementById("association")?.setAttribute("value", reservationDetails.association);
    document.getElementById("phoneNumber")?.setAttribute("value", reservationDetails.phoneNumber);
    document.getElementById("nChildren")?.setAttribute("value", reservationDetails.nChildren.toString());
    document.getElementById("nAdults")?.setAttribute("value", reservationDetails.nAdults.toString());
    document.getElementById("additionalInfo")?.setAttribute("value", reservationDetails.additionalInfo);

    reservationDetails.activities.forEach((activity: string) => {
      const checkbox = document.querySelector(`input[name="activities"][value="${activity}"]`);
      if (checkbox) {
        (checkbox as HTMLInputElement).checked = true;
      }
    });
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
      // const URL = "http://localhost:8080/api/formreq/createbooking";
      const response = await fetch("", {
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
