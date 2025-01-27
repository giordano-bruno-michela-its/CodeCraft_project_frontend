import { OfficalEmail } from "../Types/types";

/**
 * Extracts the values from the form and returns them as a OfficalEmail
 * @returns the OfficalEmail with the values from the form
 */
export function getRegistrationOfficialMailFormData(): OfficalEmail {
  const email = (document.getElementById("officiaEmail") as HTMLInputElement).value;

  return {
    email,
  };
}
