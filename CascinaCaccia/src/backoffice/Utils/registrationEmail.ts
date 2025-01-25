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
        alert("Registrazione effettuata con successo!");
        window.location.href = '../Pages/dashboard.html';


      } catch (error) {
        console.error("Errore durante il cambio della mail:", error);
        alert("Errore durante la registrazione.");
      }
    });

  } else {
    window.location.href = '../Pages/dashboard.html';
  }


}