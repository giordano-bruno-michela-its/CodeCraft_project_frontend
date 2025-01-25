import { checkAdmin, downloadEmail, getAllForms, submitPrenotation } from "../Services/api";

const token = sessionStorage.getItem('authToken');

if (!token) {
    window.location.href = '../index.html';
   

} else {
    console.log('ok');
    console.log('Token trovato, invio al server...');

    const dataAdmin = await checkAdmin(token)
    console.log(dataAdmin);

    const navbar = document.getElementById("navbar");

    function downloadMail() {
        if (token) {
            console.log(token);

            downloadEmail(token)
        }
    }



    if (dataAdmin.status == 200) {


        const dashboardItem = document.createElement("li");
        const dashboardLink = document.createElement("a");
        dashboardLink.href = "../Pages/dashboard.html";
        dashboardLink.textContent = "Dashboard";
        dashboardItem.appendChild(dashboardLink);
        navbar?.appendChild(dashboardItem);


        const registerItem = document.createElement("li");
        const registerLink = document.createElement("a");
        registerLink.href = "../Pages/registrationUser.html";
        registerLink.textContent = "Registra Nuova Utenza";
        registerItem.appendChild(registerLink);
        navbar?.appendChild(registerItem);

        const editMailItem = document.createElement("li");
        const editMailLink = document.createElement("a");
        editMailLink.href = "../Pages/registrationMail.html";
        editMailLink.textContent = "Modifica Mail Cascina";
        editMailItem.appendChild(editMailLink);
        navbar?.appendChild(editMailItem);


    }

    const mailItem = document.createElement("li");
    const mailLink = document.createElement("a");
    mailLink.id = 'mailLink'
    mailLink.textContent = "Scarica Mail";
    mailLink.addEventListener("click", downloadMail);
    mailItem.appendChild(mailLink);
    navbar?.appendChild(mailItem);

    const logoutItem = document.createElement("li");
    const logoutLink = document.createElement("a");
    logoutLink.href = "../Pages/logout.html";
    logoutLink.textContent = "Logout";
    logoutItem.appendChild(logoutLink);
    navbar?.appendChild(logoutItem);



    const data = getAllForms(token);

    data.then((prenotazioni) => {
        const containerLeft = document.getElementById('card-container');
        const containerRight = document.getElementById('card-container-right');
        const modal = document.getElementById('modal') as HTMLElement;
        const closeModal = document.querySelector('.close') as HTMLElement;

        if (!containerLeft || !containerRight) {
            console.error("Uno o entrambi i container per le card non sono stati trovati.");
            return;
        }

        if (Array.isArray(prenotazioni)) {
            // Ordina le prenotazioni in base alla contactDate (dal più recente al più vecchio)
            prenotazioni.sort((a, b) => {
                const dateA = new Date(a.contactDate);
                const dateB = new Date(b.contactDate);
                return dateB.getTime() - dateA.getTime(); // Ordina dal più recente al più vecchio
            });

            prenotazioni.forEach((prenotazione) => {
                if (prenotazione.formType === "FORM_BOOKING") {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.id = `prenotazione-${prenotazione.id}`;


                    const title = document.createElement('h2');
                    title.textContent = `${prenotazione.name} ${prenotazione.surname}`;

                    const email = document.createElement('p');
                    email.textContent = `Email: ${prenotazione.email}`;

                    const contactDate = document.createElement('p');
                    const formattedDate = new Date(prenotazione.contactDate).toLocaleDateString('it-IT');
                    contactDate.textContent = `Data di contatto: ${formattedDate}`;

                    card.appendChild(title);
                    card.appendChild(email);
                    card.appendChild(contactDate);

                    card.addEventListener('click', () => {
                        modal.style.display = "block";

                        document.getElementById('modal-title')!.textContent = `${prenotazione.name} ${prenotazione.surname}`;
                        document.getElementById('modal-email')!.textContent = `Email: ${prenotazione.email}`;
                        document.getElementById('modal-association')!.textContent = `Associazione: ${prenotazione.association}`;
                        document.getElementById('modal-contact-date')!.textContent = `Data di contatto: ${formattedDate}`;
                        document.getElementById('modal-phone-number')!.textContent = `Telefono: ${prenotazione.phoneNumber}`;
                        document.getElementById('modal-booking-duration')!.textContent = `Durata prenotazione: ${prenotazione.bookingDuration.name} - ${prenotazione.bookingDuration.description}`;
                        document.getElementById('modal-age-group')!.textContent = `Fascia di età: ${prenotazione.ageGroup ? prenotazione.ageGroup : 'Non specificata'}`;
                        document.getElementById('modal-guides-quantity')!.textContent = `Quantità guide: ${prenotazione.guidesQuantity}`;
                        document.getElementById('modal-participants-quantity')!.textContent = `Quantità partecipanti: ${prenotazione.participantsQuantity}`;
                        document.getElementById('modal-begin-time')!.textContent = `Inizio: ${prenotazione.beginTime}`;
                        document.getElementById('modal-end-time')!.textContent = `Fine: ${prenotazione.endTime}`;

                        const modalActivityType = document.getElementById('modal-activity-type')!;
                        modalActivityType.innerHTML = '';

                        prenotazione.activityType.forEach((activity: { name: string, description: string }) => {
                            const activityP = document.createElement('p');
                            activityP.textContent = `Attività: ${activity.name}`;
                            modalActivityType.appendChild(activityP);
                        });

                        document.getElementById('modal-additional-info')!.textContent = `Info aggiuntive: ${prenotazione.additionalInfo || 'Nessuna'}`;

                        const modalButtons = document.getElementById('modal-buttons')!;
                        modalButtons.innerHTML = '';

                        if (prenotazione.bookingStatus === "PENDING") {
                            modalButtons.innerHTML = `
                            <button id="close-modal">Annulla</button>
                            <button id="confirm-booking">Conferma prenotazione</button>`;
                        } else if (prenotazione.bookingStatus === "CONFIRMED") {
                            modalButtons.innerHTML = `
                            <button id="close-modal">Chiudi</button>
                            <button id="cancel-booking">Annulla Prenotazione</button>`;
                        }

                        closeModal.addEventListener('click', () => {
                            modal.style.display = "none";
                        });



                        function showLoadingModal() {
                            const loadingModal = document.getElementById('loading-modal');
                            if (loadingModal) {
                                loadingModal.style.display = 'flex';
                            }
                        }

                        function hideLoadingModal() {
                            const loadingModal = document.getElementById('loading-modal');
                            if (loadingModal) {
                                loadingModal.style.display = 'none';
                            }
                        }


                        document.getElementById('confirm-booking')?.addEventListener('click', async () => {
                            modal.style.display = "none";

                            showLoadingModal();


                            console.log('aperto1');


                            const confirmPrenotationData = {
                                id: prenotazione.id,
                                bookingStatus: 'CONFIRMED'

                            };

                            try {
                                await submitPrenotation(confirmPrenotationData, token);
                                location.reload();
                            } catch (error) {
                                console.error("Errore durante la conferma della prenotazione:", error);
                                const textError = document.getElementById('text-error');
                                if (textError) {
                                    textError!.textContent = "Si è verificato un errore,  riprova a eseguire l'operazione";
                                }
                            } finally {
                                setTimeout(() => {
                                    hideLoadingModal();

                                }, 5000);
                            }



                        });

                        document.getElementById('cancel-booking')?.addEventListener('click', async () => {
                            modal.style.display = "none";

                            showLoadingModal();


                            console.log('aperto2');


                            const cancelPrenotationData = {
                                id: prenotazione.id,
                                bookingStatus: 'PENDING'

                            };

                            try {
                                await submitPrenotation(cancelPrenotationData, token);
                                location.reload();
                            } catch (error) {
                                console.error("Errore durante la conferma della prenotazione:", error);
                                const textError = document.getElementById('text-error');
                                if (textError) {
                                    textError!.textContent = "Si è verificato un errore, riprova a eseguire l'operazione";
                                }
                            } finally {
                                setTimeout(() => {
                                    hideLoadingModal();

                                }, 5000);
                            }





                        });

                        document.getElementById('close-modal')?.addEventListener('click', () => {
                            modal.style.display = "none";
                        });
                    });



                    if (prenotazione.bookingStatus === "PENDING") {
                        containerLeft.appendChild(card);
                    } else if (prenotazione.bookingStatus === "CONFIRMED") {
                        containerRight.appendChild(card);
                    }
                }
            });
        } else {
            console.log("I dati ricevuti non sono un array.");
        }
    }).catch((error) => {
        console.error("Errore durante il caricamento delle prenotazioni:", error);
    });
}
