import { RegistrationUser } from "../Types/types";

export function getRegistrationUserFormData(): RegistrationUser {

    const name = (document.getElementById("usernameRegistrationForm") as HTMLInputElement).value;
    const username = (document.getElementById("surnameRegistrationForm") as HTMLInputElement).value;
    const email = (document.getElementById("emailRegistrationUserForm") as HTMLInputElement).value;
    const password = (document.getElementById("passwordRegistrationForm") as HTMLInputElement).value;
  
    return {
      name,
      username,
      email,
      password
    };
  }
  