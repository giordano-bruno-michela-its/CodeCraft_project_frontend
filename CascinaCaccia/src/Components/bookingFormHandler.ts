import { BookingForm } from "../Types/types";

/**
 * Extracts the values from the form and activities container and returns them as a BookingForm
 * @param activitiesContainer the activities container div element
 * @returns the BookingForm with the values from the form and activities container
 */
export function getBookingFormData(infoForm:HTMLFormElement, activitiesContainer: HTMLDivElement): BookingForm {
  const nome = (document.getElementById("name") as HTMLInputElement).value;
const cognome = (document.getElementById("surname") as HTMLInputElement).value;
const email = (document.getElementById("boking-form-email") as HTMLInputElement).value;
const telefono = (document.getElementById("phoneNumber") as HTMLInputElement).value;
const ente = (document.getElementById("association") as HTMLInputElement).value;
const descrizione = (document.getElementById("additionalInfo") as HTMLTextAreaElement).value;
const numInsegnanti = parseInt((document.getElementById("nAdults") as HTMLInputElement).value);
const numPartecipanti = parseInt((document.getElementById("nChildren") as HTMLInputElement).value);
const dataInizio = (document.getElementById("startDate") as HTMLInputElement).value;
const dataFine = (document.getElementById("endDate") as HTMLInputElement).value;
const dataContatto = new Date().toISOString().split('T')[0];

/* ATTENZIONE: le activities sono giuste ma quando si fa il return dei value (1,2,3,ecc) nel json vengono mandati al db che ha id sballati */
  const activities = Array.from(activitiesContainer.querySelectorAll('input[type="checkbox"]:checked')).map(
    (checkbox) => (checkbox as HTMLInputElement).value
  );
  

  // shorthand syntax: we can omit the value of the properties if they have the same name of the variable
  return {
    email,
    nome,
    cognome,
    ente,
    telefono,
    dataContatto,
    descrizione,
   /*  fasciaEta: {
      id: 1,
      denominazione: "6-10 anni",
      descrizione: "Da 6 a 10 anni",
      etaMin: 6,
      etaMax: 10
    }, */
    tipoRichiesta: "RICHIESTA_PRENOTAZIONE",
    dataInizio,
    dataFine,
    numPartecipanti,
    numInsegnanti,
    tipoAttivita: [
      {
        id: 1,
        denominazione: "Salto nel buio",
        descrizione: null
      },
      {
        id: 2,
        denominazione: "Tiro della cinghia",
        descrizione: null
      }
    ]
  };
}
