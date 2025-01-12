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
    (checkbox) => (checkbox as HTMLInputElement).value
  );




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
    activityType: [
      {
        id: 1,
        name: "prova",
        description: "prova"
      },
      {
        id: 2,
        name: "prova",
        description: "prova"
      }
    ],
    formType

  }
}
