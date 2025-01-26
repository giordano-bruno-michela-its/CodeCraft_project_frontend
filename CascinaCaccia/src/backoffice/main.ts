

import { verifyAuth } from "./Services/api";

async function init() {
    try {
        const result = await verifyAuth();
        console.log("Stato auth:", result);

        if (result === true) {
            if (window.location.pathname !== '/src/backoffice/Pages/login.html') {
                window.location.href = '/src/backoffice/Pages/login.html';
            }
        } else if (result === false) {
            if (window.location.pathname !== '/src/backoffice/Pages/registrationUser.html') {
                window.location.href = '/src/backoffice/Pages/registrationUser.html';
            }
        } else {
            console.log('Risposta non valida');
        }
    } catch (error) {
        console.error("Errore:", error);
        alert("Errore");
    }
}

window.addEventListener('DOMContentLoaded', init);



