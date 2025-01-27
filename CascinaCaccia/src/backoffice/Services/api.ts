import { Login, OfficalEmail, RegistrationUser } from "../Types/types";

/**
 * Submits the login form data to the server for authentication.
 *
 * @param {Login} formData - The login form data containing username and password.
 * @returns {Promise<void>} A promise that resolves when the login process is completed.
 * @throws Will throw an error if the server response is not ok.
 *
 * The function sends a POST request to the server with the login data.
 * If successful, it stores the received authentication token in session storage
 * and redirects the user to the dashboard page.
 */
export async function submitLoginForm(formData: Login): Promise<void> {
  console.log(JSON.stringify(formData));

  const response = await fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(`Errore nella richiesta: ${response.status} - ${errorDetails.message || "Errore sconosciuto"}`);
  }

  const data = await response.json();
  sessionStorage.setItem("authToken", data.accessToken);
  window.location.href = "../Pages/dashboard.html";
  return data;
}

/**
 * Retrieves all forms from the server.
 *
 * @param {string} token - The authentication token used for authorization.
 * @returns {Promise<void>} A promise that resolves to the data of all forms.
 * @throws Will throw an error if the server response is not ok.
 */
export async function getAllForms(token: string): Promise<void> {
  const response = await fetch("http://localhost:8080/api/formreq/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
}

/**
 * Submits the registration form data to the server for user creation.
 *
 * @param {RegistrationUser} formData - The registration form data containing username, password and email.
 * @returns {Promise<string>} A promise that resolves with the response from the server.
 * @throws Will throw an error if the server response is not ok.
 *
 * The function sends a POST request to the server with the registration data.
 * If successful, it returns the received response from the server.
 */
export async function submitRegistrationUserForm(formData: RegistrationUser): Promise<string> {
  console.log(JSON.stringify(formData));

  const response = await fetch("http://localhost:8080/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(`Errore nella richiesta: ${response.status} - ${errorDetails.message || "Errore sconosciuto"}`);
  }

  const data = await response.text();
  return data;
}

/**
 * Submits the registration form data to the server for official email creation.
 *
 * @param {OfficalEmail} formData - The registration form data containing the email.
 * @param {string} token - The authentication token.
 * @returns {Promise<void>} A promise that resolves when the registration process is completed.
 * @throws Will throw an error if the server response is not ok.
 *
 * The function sends a PUT request to the server with the registration data.
 * If successful, it returns the received response from the server.
 */
export async function submitRegistrationOfficialMailForm(formData: OfficalEmail, token: string): Promise<void> {
  const requestBody = {
    id: 1,
    noReplyEmail: formData.email,
    noReplyPassword: "vwiwpzvtuypoinuo",
    adminEmail: formData.email,
  };

  const response = await fetch("http://localhost:8080/api/admin/updateMail", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(`Errore nella richiesta: ${response.status} - ${errorDetails.message || "Errore sconosciuto"}`);
  }

  const data = await response.json();
  return data;
}

/**
 * Submits a prenotation update request to the server without sending an email.
 *
 * @param {any} formData - The prenotation data to be updated, including the reservation ID.
 * @param {string} token - The authentication token used for authorization.
 * @returns {Promise<Response>} A promise that resolves with the server's response.
 * @throws Will throw an error if the server response is not ok, including the error message.
 *
 * The function sends a PUT request to update the booking information on the server.
 */
export async function submitPrenotation(formData: any, token: string) {
  const response = await fetch(`http://localhost:8080/api/formreq/updatebookingnomail/${formData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(`Errore nella richiesta: ${response.status} - ${errorDetails.message || "Errore sconosciuto"}`);
  }

  return response;
}

/**
 * Verifies if there are any users registered in the system.
 *
 * @returns {Promise<any>} A promise that resolves with the server's response data indicating the presence of users.
 * @throws Will throw an error if the server response is not ok, including the error message.
 *
 * The function sends a GET request to check for registered users in the system.
 */

export async function verifyAuth() {
  const response = await fetch("http://localhost:8080/api/auth/has-users");

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(`Errore nella richiesta: ${response.status} - ${errorDetails.message || "Errore sconosciuto"}`);
  }

  const data = await response.json();

  return data;
}

/**
 * Checks if the user is an admin.
 *
 * @param {string} token - The authentication token used for authorization.
 * @returns {Promise<Response>} A promise that resolves with the server's response, indicating if the user is an admin.
 * @throws Will throw an error if the server response is not ok, including the error message.
 *
 * The function sends a GET request to check if the user is an admin.
 */
export async function checkAdmin(token: string): Promise<any> {
  const response = await fetch("http://localhost:8080/api/admin", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}

/**
 * Downloads the newsletter email as a file from the server.
 *
 * @param {string} token - The authentication token used for authorization.
 * @returns {Promise<any>} A promise that resolves when the download process is completed.
 * @throws Will throw an error if the server response is not ok.
 *
 * The function sends a POST request to the server to retrieve the newsletter file
 * in a specified format. If successful, it creates a downloadable link for the file
 * and prompts the user to download it.
 */
export async function downloadEmail(token: string): Promise<any> {
  const response = await fetch("http://localhost:8080/api/emails/newsletter/file", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      format: "txt",
    }),
  });
  console.log(response);

  if (!response.ok) {
    throw new Error(`Errore durante il download: ${response.statusText}`);
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  const contentDisposition = response.headers.get("Content-Disposition");
  const filename = contentDisposition?.match(/filename="(.+)"/)?.[1] || "newsletter.txt";

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);

  console.log("File scaricato con successo");

  return response;
}
