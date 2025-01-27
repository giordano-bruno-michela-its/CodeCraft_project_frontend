import { checkAdmin, downloadEmail, getAllForms, submitPrenotation } from "../Services/api";
import { initNavbar } from "../../Components/navbar";

const token = sessionStorage.getItem("authToken");

if (!token) {
  window.location.href = "../index.html";
} else {
  console.log("ok");
  console.log("Token trovato, invio al server...");

  const dataAdmin = await checkAdmin(token);
  console.log(dataAdmin);

  const navbarContainer = document.getElementById("navbar-menu");
  const dashboardList = document.createElement("ul");

  navbarContainer?.appendChild(dashboardList);

  initNavbar();

  /**
   * Downloads the newsletter email in .txt format
   * @param {string} token the auth token
   * @returns {Promise<void>} the promise resolving when the download is finished
   */
  function downloadMail() {
    if (token) {
      console.log(token);

      downloadEmail(token);
    }
  }

  if (dataAdmin.status == 200) {
    const dashboardItem = document.createElement("li");
    const dashboardLink = document.createElement("a");
    dashboardLink.href = "../Pages/dashboard.html";
    dashboardLink.textContent = "Dashboard";
    dashboardItem.appendChild(dashboardLink);
    dashboardList?.appendChild(dashboardItem);
    dashboardItem.classList.add("navbar-link");

    const registerItem = document.createElement("li");
    const registerLink = document.createElement("a");
    registerLink.href = "../Pages/registrationUser.html";
    registerLink.textContent = "Registra Nuova Utenza";
    registerItem.appendChild(registerLink);
    dashboardList?.appendChild(registerItem);
    registerItem.classList.add("navbar-link");

    const editMailItem = document.createElement("li");
    const editMailLink = document.createElement("a");
    editMailLink.href = "../Pages/registrationMail.html";
    editMailLink.textContent = "Modifica Mail Cascina";
    editMailItem.appendChild(editMailLink);
    dashboardList?.appendChild(editMailItem);
    editMailItem.classList.add("navbar-link");
  }

  const mailItem = document.createElement("li");
  const mailLink = document.createElement("a");
  mailLink.id = "mailLink";
  mailLink.textContent = "Scarica Mail";
  mailLink.addEventListener("click", downloadMail);
  mailItem.appendChild(mailLink);
  dashboardList?.appendChild(mailItem);
  mailItem.classList.add("navbar-link");

  const logoutItem = document.createElement("li");
  const logoutLink = document.createElement("a");
  logoutLink.id = "logoutBtn";
  logoutLink.href = "../Pages/logout.html";
  logoutLink.textContent = "Logout";
  logoutItem.appendChild(logoutLink);
  dashboardList?.appendChild(logoutItem);
  logoutItem.classList.add("navbar-link");

  const data = getAllForms(token);

  data
    .then((prenotazioni) => {
      const containerLeft = document.getElementById("card-container");
      const containerRight = document.getElementById("card-container-right");
      const modal = document.getElementById("modal") as HTMLElement;
      const closeModal = document.querySelector(".close") as HTMLElement;

      if (!containerLeft || !containerRight) {
        console.error("Uno o entrambi i container per le card non sono stati trovati.");
        return;
      }

      if (Array.isArray(prenotazioni)) {
        prenotazioni.sort((a, b) => {
          const dateA = new Date(a.contactDate);
          const dateB = new Date(b.contactDate);
          return dateB.getTime() - dateA.getTime();
        });

        prenotazioni.forEach((prenotazione) => {
          if (prenotazione.formType === "FORM_BOOKING") {
            const card = document.createElement("div");
            card.className = "card";
            card.id = `prenotazione-${prenotazione.id}`;

            const title = document.createElement("h3");
            title.textContent = `${prenotazione.name} ${prenotazione.surname}`;

            const email = document.createElement("p");
            email.textContent = `Email: ${prenotazione.email}`;

            const entityName = document.createElement("p");
            entityName.textContent = `${prenotazione.association}`;

            const cardFooter = document.createElement("div");
            cardFooter.classList.add("card-footer");

            const cardStatus = document.createElement("div");
            cardStatus.classList.add("status-box");
            cardFooter.appendChild(cardStatus);

            const contactDate = document.createElement("p");
            const formattedDate = new Date(prenotazione.contactDate).toLocaleDateString("it-IT");
            contactDate.classList.add("date");
            contactDate.textContent = `${formattedDate}`;

            card.appendChild(contactDate);
            card.appendChild(title);
            card.appendChild(entityName);
            card.appendChild(email);
            card.appendChild(cardFooter);

            card.addEventListener("click", () => {
              modal.style.display = "flex";

              document.getElementById("modal-title")!.textContent = `${prenotazione.name} ${prenotazione.surname}`;
              document.getElementById("modal-association")!.textContent = `${prenotazione.association}`;
              document.getElementById("modal-contact-date")!.textContent = `in data ${formattedDate}`;
              document.getElementById("modal-prenotation-date")!.textContent = `${prenotazione.beginTime} - ${prenotazione.endTime}`;
              document.getElementById(
                "modal-booking-duration"
              )!.textContent = `${prenotazione.bookingDuration.name} - ${prenotazione.bookingDuration.description}`;
              document.getElementById(
                "modal-quantity"
              )!.textContent = `${prenotazione.participantsQuantity} partecipanti, ${prenotazione.guidesQuantity} tutor`;
              const modalEmail = document.getElementById("modal-email") as HTMLAnchorElement;
              modalEmail!.textContent = `${prenotazione.email}`;
              modalEmail!.href = `mailto:${prenotazione.email}`;
              const modalTelephone = document.getElementById("modal-phone-number") as HTMLAnchorElement;
              modalTelephone!.textContent = `${prenotazione.phoneNumber}`;
              modalTelephone!.href = `tel:${prenotazione.phoneNumber}`;

              const modalActivityType = document.getElementById("modal-activity-type")!;
              modalActivityType.innerHTML = "";

              prenotazione.activityType.forEach((activity: { name: string; description: string }) => {
                const activityP = document.createElement("p");
                activityP.textContent = `${activity.name}`;
                modalActivityType.appendChild(activityP);
              });

              document.getElementById("modal-additional-info")!.textContent = `${prenotazione.additionalInfo || "Nessuna"}`;

              const modalButtons = document.getElementById("modal-buttons")!;
              modalButtons.innerHTML = "";

              if (prenotazione.bookingStatus === "PENDING") {
                modalButtons.innerHTML = `
                            <button id="close-modal">Rifiuta</button>
                            <button id="confirm-booking">Conferma</button>`;
              } else if (prenotazione.bookingStatus === "CONFIRMED") {
                modalButtons.innerHTML = `
                            <button id="cancel-booking">Cancella Prenotazione</button>`;
              }

              closeModal.addEventListener("click", () => {
                modal.style.display = "none";
              });

              /**
               * Shows the loading modal.
               * @function
               */
              function showLoadingModal() {
                const loadingModal = document.getElementById("loading-modal");
                if (loadingModal) {
                  loadingModal.style.display = "flex";
                }
              }

              /**
               * Hides the loading modal if it is currently displayed.
               * Checks for the existence of the loading modal element
               * and sets its display style to 'none' to hide it.
               */
              function hideLoadingModal() {
                const loadingModal = document.getElementById("loading-modal");
                if (loadingModal) {
                  loadingModal.style.display = "none";
                }
              }

              document.getElementById("confirm-booking")?.addEventListener("click", async () => {
                modal.style.display = "none";

                showLoadingModal();

                const confirmPrenotationData = {
                  id: prenotazione.id,
                  bookingStatus: "CONFIRMED",
                };

                try {
                  await submitPrenotation(confirmPrenotationData, token);
                  location.reload();
                } catch (error) {
                  console.error("Errore durante la conferma della prenotazione:", error);
                  const textError = document.getElementById("text-error");
                  if (textError) {
                    textError!.textContent = "Si è verificato un errore,  riprova a eseguire l'operazione";
                  }
                } finally {
                  setTimeout(() => {
                    hideLoadingModal();
                  }, 5000);
                }
              });

              document.getElementById("cancel-booking")?.addEventListener("click", async () => {
                modal.style.display = "none";

                showLoadingModal();

                const cancelPrenotationData = {
                  id: prenotazione.id,
                  bookingStatus: "PENDING",
                };

                try {
                  await submitPrenotation(cancelPrenotationData, token);
                  location.reload();
                } catch (error) {
                  console.error("Errore durante la conferma della prenotazione:", error);
                  const textError = document.getElementById("text-error");
                  if (textError) {
                    textError!.textContent = "Si è verificato un errore, riprova a eseguire l'operazione";
                  }
                } finally {
                  setTimeout(() => {
                    hideLoadingModal();
                  }, 5000);
                }
              });

              document.getElementById("close-modal")?.addEventListener("click", () => {
                modal.style.display = "none";
              });
            });

            if (prenotazione.bookingStatus === "PENDING") {
              containerLeft.appendChild(card);
              cardStatus.textContent = "DA CONFERMARE";
              cardStatus.classList.add("pending");
            } else if (prenotazione.bookingStatus === "CONFIRMED") {
              containerRight.appendChild(card);
              cardStatus.textContent = "CONFERMATO";
              cardStatus.classList.add("confirmed");
            }
          }
        });
      } else {
        console.log("I dati ricevuti non sono un array.");
      }
    })
    .catch((error) => {
      console.error("Errore durante il caricamento delle prenotazioni:", error);
    });
}
