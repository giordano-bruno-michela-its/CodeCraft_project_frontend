import { FormDataRequest } from "../Types/types";

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
