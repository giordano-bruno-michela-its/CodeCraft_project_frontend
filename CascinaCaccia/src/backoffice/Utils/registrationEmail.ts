import { getRegistrationOfficialMailFormData } from "../Components/registrationOfficialEmailHandler";
import { checkAdmin, submitRegistrationOfficialMailForm } from "../Services/api";

const token = sessionStorage.getItem('authToken');
console.log(token);



if (!token) {
  window.location.href = '../index.html';
} else {

  const dataAdmin = await checkAdmin(token)
  console.log(dataAdmin);

  if (dataAdmin.status == 200) {

    console.log('ok');
    console.log('Token trovato, invio al server...');

    const officialMailForm = document.getElementById('registrationOfficialEmail') as HTMLFormElement;

    officialMailForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = getRegistrationOfficialMailFormData();

      try {
        const result = await submitRegistrationOfficialMailForm(formData, token);
        console.log("Email sostituita con successo:", result);
        const errorTextRegistrationMail = document.getElementById('errorTextRegistrationMail');
        if (errorTextRegistrationMail) {
         errorTextRegistrationMail.textContent='Registrazione della mail effettuata con successo!'
        }

        setTimeout(() => {
          window.location.href = '../Pages/dashboard.html';
        }, 2000);



      } catch (error) {
        const errorTextRegistrationMail = document.getElementById('errorTextRegistrationMail');
        if (errorTextRegistrationMail) {
         errorTextRegistrationMail.textContent='Si è verificato un errore durante la registrazione della mail, riprovare'
        }
        console.error("Errore durante il cambio della mail:", error);
      }
    });

  } else {
    window.location.href = '../Pages/dashboard.html';
  }


}