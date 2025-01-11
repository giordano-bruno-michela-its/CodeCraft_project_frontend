import { NewsletterForm } from "../Types/types";

/**
 * Extracts the values from the form and activities container and returns them as a BookingForm
 * @param activitiesContainer the activities container div element
 * @returns the BookingForm with the values from the form and activities container
 */
export function getNewsletterFormData(): NewsletterForm {
  const name = (document.getElementById("newsletter-form-name") as HTMLInputElement).value;
  const surname = (document.getElementById("newsletter-form-surname") as HTMLInputElement).value;
  const email = (document.getElementById("newsletter-email") as HTMLInputElement).value;
  const contactDate = new Date().toISOString().split('T')[0];
  const formType = "FORM_NEWSLETTER";
  const newsletterCheck = "YES";


  // shorthand syntax: we can omit the value of the properties if they have the same name of the variable
  return {
email, 
name,
surname,
contactDate,
newsletterCheck,
formType
};
}
