import { getLoginFormData } from "../Components/loginFormHandler";
import { submitLoginForm } from "../Services/api";

const loginForm = document.getElementById("login-form") as HTMLFormElement;

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = getLoginFormData();

  try {
    await submitLoginForm(formData);
  } catch (error) {
    console.error("Login errato:", error);
    const textErrorLogin = document.getElementById("textErrorLogin");

    if (textErrorLogin) {
      textErrorLogin.textContent = "Login errato !";
    }
  }
});
