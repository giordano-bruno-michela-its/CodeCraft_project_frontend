import { BookingForm, NewsletterForm } from "../Types/types";
import { FormDataRequest } from "../Types/types";

/**
 * Sends a booking form to the server for processing.
 *
 * @param {BookingForm} formData - The booking form data to be submitted.
 * @returns {Promise<void>} A promise that resolves when the form has been successfully submitted.
 * @throws Will throw an error if the server response is not ok.
 */
export async function submitBookingForm(formData: BookingForm): Promise<void> {
  const response = await fetch("http://localhost:8080/api/formreq/createbooking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(`Errore nella richiesta: ${response.status} - ${errorDetails.message}`);
  }
  return response.json();
}

/**
 * Submits form data to the server for processing.
 *
 * @param {FormDataRequest} formData - The form data to be submitted.
 * @returns {Promise<void>} A promise that resolves when the form data has been successfully submitted.
 * @throws Will throw an error if the server response is not ok.
 */
export async function submitFormData(formData: FormDataRequest): Promise<void> {
  const response = await fetch("http://localhost:8080/api/formreq/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`Errore nella richiesta: ${response.status}`);
  }

  return response.json();
}

/**
 * Submits newsletter form data to the server for processing.
 *
 * @param {NewsletterForm} formData - The form data to be submitted.
 * @returns {Promise<void>} A promise that resolves when the form data has been successfully submitted.
 * @throws Will throw an error if the server response is not ok.
 */
export async function submitNewsletterData(formData: NewsletterForm): Promise<void> {
  const response = await fetch("http://localhost:8080/api/formnewsletter/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`Errore nella richiesta: ${response.status}`);
  }

  return response.json();
}

/**
 * Submits the retrieve reservation form to the server for processing.
 *
 * @param {string} email - The user's email address.
 * @param {string} code - The user's code.
 * @returns {Promise<any>} A promise that resolves when the form data has been successfully submitted.
 * @throws Will throw an error if the server response is not ok.
 */
export async function submitRetrieveReservationForm(email: string, code: string): Promise<any> {
  const URL = `http://localhost:8080/api/formreq/code`;
  const response = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, code }),
  });

  if (!response.ok) {
    throw new Error(`Errore nella richiesta: ${response.status}`);
  }

  return response.json();
}
