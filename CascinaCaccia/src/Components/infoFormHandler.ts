import { FormDataRequest } from "../Types/types";

/**
 * Gets the form data from the given HTML form and activities container
 * and returns it as a FormDataRequest object.
 *
 * @param {HTMLFormElement} form - The HTML form element
 * @param {HTMLDivElement} activitiesContainer - The HTML div element containing
 *   the activities checkboxes
 * @returns {FormDataRequest} The form data as a FormDataRequest object
 */
export function getFormDataInfo(form: HTMLFormElement, activitiesContainer: HTMLDivElement): FormDataRequest {
  const name = (form.querySelector("#info-form-name") as HTMLInputElement).value;
  const surname = (form.querySelector("#info-form-surname") as HTMLInputElement).value;
  const email = (form.querySelector("#info-form-email") as HTMLInputElement).value;
  const phoneNumber = (form.querySelector("#info-form-phoneNumber") as HTMLInputElement).value;
  const association = (form.querySelector("#info-form-association") as HTMLInputElement).value;
  const additionalInfo = (form.querySelector("#info-form-additionalInfo") as HTMLTextAreaElement).value;
  const contactDate = new Date().toISOString().split("T")[0];
  // const newsletterCheck = "YES";

  const newsletterCheckbox = document.getElementById("info-form-newsletter") as HTMLInputElement;
  const newsletterCheck = newsletterCheckbox.checked ? "YES" : "NO";
  console.log(newsletterCheck);

  const formType = "FORM_INFO";

  const activities = Array.from(activitiesContainer.querySelectorAll('input[type="checkbox"]:checked')).map((checkbox) =>
    parseInt((checkbox as HTMLInputElement).value)
  );

  console.log(activities);

  const activityType = [
    {
      id: 1,
      name: "STORIA DI CASCINA Carla e Bruno CACCIA",
      description: "Un racconto avvincente della storia della Cascina e del suo impegno contro le mafie",
    },
    {
      id: 2,
      name: "BRUNO CACCIA",
      description: " Laboratorio sulla figura di Bruno Caccia sotto il profilo istituzionale e umano",
    },
    {
      id: 3,
      name: "INTRODUZIONE AL TEMA MAFIA",
      description: "Attività introduttiva volta a definire, conoscere e far conoscere il fenomeno mafioso",
    },
    {
      id: 4,
      name: "I BENI CONFISCATI",
      description: "Attività di approfondimento sui beni confiscati, delle leggi sulla confisca dei beni e delle novità legislative",
    },
    {
      id: 5,
      name: "LE MAFIE IN PIEMONTE",
      description: " Attività di approfondimento sulla presenza delle mafie sul territorio piemontese",
    },
    {
      id: 6,
      name: "SOSTENIBILITÀ AMBIENTALE",
      description:
        "Approfondimenti sui temi della sostenibilità ambientale e della disuguaglianza con riflessioni sui problemi e la ricerca delle possibili soluzioni.",
    },
    {
      id: 7,
      name: "LA MAFIA ATTRAVERSO IL CINEMA",
      description:
        "Riflessioni sui modelli mafiosi presentati dal cinema per comprendere il loro impatto sulla società e migliorare la comprensione critica (e su quanto siano rappresentativi della realtà oggettiva e del sentire comune).",
    },
    {
      id: 8,
      name: "IL GIOCO NON È UN AZZARDO (6-14 anni)",
      description:
        "L'attività mira a esplorare le varie tipologie di gioco e le loro caratteristiche e a riflettere sulla correttezza dei giochi a cui si prende parte",
    },
    {
      id: 9,
      name: "CHI NON GIOCA VINCE",
      description:
        "Considerazioni per sensibilizzare ai rischi e alla dipendenza del gioco d'azzardo e ai collegamenti tra mafia e gioco d'azzardo illegale",
    },
  ];

  const selectedActivities = activityType
    .filter((activity) => activities.includes(activity.id))
    .map((activity) => ({
      id: activity.id,
      name: activity.name,
      description: activity.description,
    }));

  console.log(selectedActivities);

  return {
    email,
    name,
    surname,
    association,
    phoneNumber,
    contactDate,
    additionalInfo,
    newsletterCheck,
    activityType: selectedActivities,
    formType,
  };
}
