import { BookingForm } from "../Types/types";

/**
 * Extracts the values from the form and activities container and returns them as a BookingForm
 * @param form the form element
 * @param activitiesContainer the activities container div element
 * @returns the BookingForm with the values from the form and activities container
 */
export function getFormData(form: HTMLFormElement, activitiesContainer: HTMLDivElement): BookingForm {
  const name = (form.querySelector("name") as HTMLInputElement).value;
  const surname = (form.querySelector("surname") as HTMLInputElement).value;
  const email = (form.querySelector("email") as HTMLInputElement).value;
  const phoneNumber = (form.querySelector("phoneNumber") as HTMLInputElement).value;
  const association = (form.querySelector("association") as HTMLInputElement).value;
  const additionalInfo = (form.querySelector("additionalInfo") as HTMLTextAreaElement).value;
  const nAdults = parseInt((form.querySelector("nAdults") as HTMLInputElement).value);
  const nChildren = parseInt((form.querySelector("nChildren") as HTMLInputElement).value);
  const duration = (form.querySelector("duration") as HTMLInputElement).value;
  const startDate = (form.querySelector("startDate") as HTMLInputElement).value;
  const endDate = (form.querySelector("endDate") as HTMLInputElement).value;
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
    nAdults,
    nChildren,
    duration,
    startDate,
    endDate,
    additionalInfo,
  };
}
