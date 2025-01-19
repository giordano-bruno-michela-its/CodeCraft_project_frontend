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

export async function submitRetrieveReservationForm(email: string, code: string): Promise<any> {
  const URL = `http://localhost:8080/api/formreq/code/${code}`;
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error(`Errore nella richiesta: ${response.status}`);
  }

  return response.json();
}
