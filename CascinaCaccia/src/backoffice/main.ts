import { verifyAuth } from "./Services/api";

async function init() {
  try {
    const result = await verifyAuth();

    if (result === true) {
      if (window.location.pathname !== "/src/backoffice/Pages/login.html") {
        window.location.href = "/src/backoffice/Pages/login.html";
      }
    } else if (result === false) {
      if (window.location.pathname !== "/src/backoffice/Pages/registrationUser.html") {
        window.location.href = "/src/backoffice/Pages/registrationUser.html";
      }
    }
  } catch (error) {
    console.error("Errore:", error);
    alert("Errore");
  }
}

window.addEventListener("DOMContentLoaded", init);
