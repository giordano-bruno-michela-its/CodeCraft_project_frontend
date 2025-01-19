export function getRetrieveReservationFormData(): { email: string; code: string } {
  const email = (document.getElementById("email") as HTMLInputElement).value;
  // six input values converted into a unique string
  const codeInputs = Array.from(document.querySelectorAll(".code-inputs input"));
  const code = codeInputs.map((input) => (input as HTMLInputElement).value).join("");
  console.log(typeof code, code);

  // shorthand syntax: we can omit the value of the properties if they have the same name of the variable
  return {
    email,
    code,
  };
}
