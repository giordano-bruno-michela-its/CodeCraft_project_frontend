import { getRegistrationUserFormData } from "../Components/registrationFormHandler";
import { checkAdmin, submitRegistrationUserForm, verifyAuth } from "../Services/api";

const resultAuth = await verifyAuth();
console.log("Stato auth:", resultAuth);

if (resultAuth == false) {
  const registerForm = document.getElementById("registrationUserForm") as HTMLFormElement;

  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = getRegistrationUserFormData();

    try {
      await submitRegistrationUserForm(formData);

      window.location.href = "../Pages/login.html";
    } catch (error) {
      console.error("Errore durante la registrazione:", error);
    }
  });
} else if (resultAuth == true) {
  const token = sessionStorage.getItem("authToken");

  if (token) {
    const resultAuth = await checkAdmin(token);

    if (resultAuth.status == 200) {
      const registerForm = document.getElementById("registrationUserForm") as HTMLFormElement;

      registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = getRegistrationUserFormData();
        console.log(formData);

        console.log("dentro");

        try {
          await submitRegistrationUserForm(formData);
          const errorTextRegistrationUser = document.getElementById("errorTextRegistrationUser");
          if (errorTextRegistrationUser) {
            errorTextRegistrationUser.textContent = "Registrazione effettuata con successo !";
          }

          setTimeout(() => {
            window.location.href = "../Pages/dashboard.html";
          }, 2000);
        } catch (error) {
          const errorTextRegistrationUser = document.getElementById("errorTextRegistrationUser");
          if (errorTextRegistrationUser) {
            errorTextRegistrationUser.textContent = "Errore durante la registrazione, riprovare";
          }
          console.error("Errore durante la registrazione:", error);
        }
      });
    } else {
      window.location.href = "../Pages/dashboard.html";
    }
  } else {
    window.location.href = "../Pages/login.html";
  }
}
