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
export function getFormData(form: HTMLFormElement, activitiesContainer: HTMLDivElement): FormDataRequest {
  const name = (form.querySelector("#name") as HTMLInputElement).value;
  const surname = (form.querySelector("#surname") as HTMLInputElement).value;
  const email = (form.querySelector("#email") as HTMLInputElement).value;
  const phoneNumber = (form.querySelector("#phoneNumber") as HTMLInputElement).value;
  const association = (form.querySelector("#association") as HTMLInputElement).value;
  const additionalInfo = (form.querySelector("#additionalInfo") as HTMLTextAreaElement).value;

  const activities = Array.from(activitiesContainer.querySelectorAll('input[type="checkbox"]:checked')).map(
    (checkbox) => (checkbox as HTMLInputElement).value
  );
  // shorthand syntax: we can omit the value of the properties if they have the same name of the variable
  return {
    name,
    surname,
    email,
    phoneNumber,
    association,
    activities,
    additionalInfo,
  };
}
