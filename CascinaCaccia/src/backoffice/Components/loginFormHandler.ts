import { Login } from "../Types/types";


export function getLoginFormData(): Login {

  const username = (document.getElementById("login-username") as HTMLInputElement).value;
  const password = (document.getElementById("login-password") as HTMLInputElement).value;

  

  return {
    username,
    password
  };
}
