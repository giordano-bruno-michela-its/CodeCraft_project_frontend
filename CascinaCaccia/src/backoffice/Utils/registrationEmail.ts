import { getRegistrationOfficialMailFormData } from "../Components/registrationOfficialEmailHandler";
import { checkAdmin, submitRegistrationOfficialMailForm } from "../Services/api";

const token = sessionStorage.getItem("authToken");

if (!token) {
  window.location.href = "../index.html";
} else {
  const dataAdmin = await checkAdmin(token);

  if (dataAdmin.status == 200) {
    const officialMailForm = document.getElementById("registrationOfficialEmail") as HTMLFormElement;

    officialMailForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = getRegistrationOfficialMailFormData();

      try {
        await submitRegistrationOfficialMailForm(formData, token);
        const errorTextRegistrationMail = document.getElementById("errorTextRegistrationMail");
        if (errorTextRegistrationMail) {
          errorTextRegistrationMail.textContent = "Registrazione della mail effettuata con successo!";
        }

        setTimeout(() => {
          window.location.href = "../Pages/dashboard.html";
        }, 2000);
      } catch (error) {
        const errorTextRegistrationMail = document.getElementById("errorTextRegistrationMail");
        if (errorTextRegistrationMail) {
          errorTextRegistrationMail.textContent = "Si è verificato un errore durante la registrazione della mail, riprovare";
        }
        console.error("Errore durante il cambio della mail:", error);
      }
    });
  } else {
    window.location.href = "../Pages/dashboard.html";
  }
}
