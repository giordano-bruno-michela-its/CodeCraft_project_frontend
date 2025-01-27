import { getLoginFormData } from "../Components/loginFormHandler";
import { submitLoginForm } from "../Services/api";


const loginForm = document.getElementById('login-form') as HTMLFormElement;



loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = getLoginFormData();

  try {
    const result = await submitLoginForm(formData);
    console.log("Login effettuato con successo:", result);


  } catch (error) {
    console.error("Login errato:", error);
    const textErrorLogin = document.getElementById('textErrorLogin')


    if (textErrorLogin) {
      textErrorLogin.textContent = 'Login errato !'
    }



  }




});