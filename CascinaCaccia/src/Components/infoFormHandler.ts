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
  const contactDate = new Date().toISOString().split('T')[0];
  const newsletterCheck = "YES";
  const formType = "FORM_INFO";

  const activities = Array.from(activitiesContainer.querySelectorAll('input[type="checkbox"]:checked')).map(
    (checkbox) => parseInt((checkbox as HTMLInputElement).value)
  );

  console.log(activities);
  
  const activityType = [
    {
      id: 1,
      name: "Storia della cascina Carla e Bruno Caccia",
      description: "prova"
    },
    {
      id: 2,
      name: "Bruno Caccia",
      description: "prova"
    },
    {
      id: 3,
      name: "Regolegalità",
      description: "altro"
    },
    {
      id: 4,
      name: "I beni confiscati",
      description: "prova"
    },
    {
      id: 5,
      name: "Le mafie e il cibo",
      description: "prova"
    },
    {
      id: 6,
      name: "Miele e Api",
      description: "altro"
    },
    {
      id: 7,
      name: "Ricicliamo attività artistiche e manuali",
      description: "prova"
    },
    {
      id: 8,
      name: "La mafia attraverso il cinema: percezioni culturali",
      description: "prova"
    },
    {
      id: 9,
      name: "Il gioco non è un azzardo (6-14 anni)",
      description: "altro"
    },
    {
      id: 10,
      name: "Chi non gioca vince",
      description: "altro"
    },
  ];

  const selectedActivities = activityType
  .filter((activity) => activities.includes(activity.id))
  .map((activity) => ({
    id: activity.id,
    name: activity.name,
    description: surname, // Use the surname from the form
  }));

  console.log(selectedActivities);
  



  // shorthand syntax: we can omit the value of the properties if they have the same name of the variable
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
    formType

  }
}
