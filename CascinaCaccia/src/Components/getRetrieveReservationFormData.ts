/**
 * Extracts the values from the Retrieve Reservation form
 * @returns email and code value
 */
export function getRetrieveReservationFormData(): { email: string; code: string } {
  const email = (document.getElementById("email") as HTMLInputElement).value;
  // six input values converted into a unique string
  const codeInputs = Array.from(document.querySelectorAll(".code-inputs input"));
  const code = codeInputs.map((input) => (input as HTMLInputElement).value).join("");
  console.log(typeof code, code);
console.log(email);

  return {
    email,
    code,
  };
}
