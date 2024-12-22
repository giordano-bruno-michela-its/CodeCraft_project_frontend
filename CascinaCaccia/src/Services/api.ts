// api.ts
import { FormDataRequest } from "../Types/types";

const API_URL = "http://localhost:8080/api/formreq/create";

/**
 * Sends a POST request to the API with the given data, containing the form data.
 * @param data The form data to send to the API.
 * @returns A promise that resolves with the server response, or rejects with an error.
 */
export async function sendFormRequest(data: FormDataRequest): Promise<any> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Errore nella richiesta: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
