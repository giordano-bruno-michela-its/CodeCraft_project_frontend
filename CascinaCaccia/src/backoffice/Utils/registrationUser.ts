import { getRegistrationUserFormData } from "../Components/registrationFormHandler";
import { checkAdmin, submitRegistrationUserForm, verifyAuth } from "../Services/api";


const resultAuth = await verifyAuth();
console.log("Stato auth:", resultAuth);

if (resultAuth == false) {
  console.log('primo accesso super', resultAuth);

  const registerForm = document.getElementById('registrationUserForm') as HTMLFormElement;

  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = getRegistrationUserFormData();
    console.log(formData);


    try {
      const result = await submitRegistrationUserForm(formData);
      console.log("Registrazione effettuata con successo:", result);

      window.location.href = '../Pages/login.html';

    } catch (error) {
      console.error("Errore durante la registrazione:", error);
    }
  });
} else if (resultAuth == true) {

  console.log('il super esiste, secondo accesso per creazione nuove utente');
  const token = sessionStorage.getItem('authToken');
  console.log(token);

  console.log('il super esiste,token esiste secondo accesso per creazione nuove utente');

  if (token) {

    console.log(token);
    

    const resultAuth = await checkAdmin(token);
    console.log("Stato admin:", await resultAuth.text());

    if (resultAuth.status == 200) {
      
      const registerForm = document.getElementById('registrationUserForm') as HTMLFormElement;
      
      registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = getRegistrationUserFormData();
        console.log(formData);
        
        console.log('dentro');

        try {
          const result = await submitRegistrationUserForm(formData);
          console.log("Registrazione effettuata con successo:", result);
         const errorTextRegistrationUser = document.getElementById('errorTextRegistrationUser');
         if (errorTextRegistrationUser) {
          errorTextRegistrationUser.textContent='Registrazione effettuata con successo !'
         }

         setTimeout(() => {
         window.location.href = '../Pages/dashboard.html';
          
         }, 2000);


        } catch (error) {
          const errorTextRegistrationUser = document.getElementById('errorTextRegistrationUser');
         if (errorTextRegistrationUser) {
          errorTextRegistrationUser.textContent='Errore durante la registrazione, riprovare'
         }
          console.error("Errore durante la registrazione:", error);
        }
      });

    } else {
      window.location.href = '../Pages/dashboard.html';
    }



  } else {
    window.location.href = '../Pages/login.html';

  }

}





