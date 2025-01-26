# Agora
Un portale educativo e promozionale per valorizzare Cascina Caccia e promuovere le attività di educazione alla legalità, eventi culturali e visite scolastiche.

---

## Descrizione
Agora è un portale educativo e promozionale che si propone di valorizzare Cascina Caccia, uno dei beni confiscati alla mafia più importanti del Piemonte. Dedicata alla memoria di Bruno Caccia, magistrato ucciso a Torino dalla ‘ndrangheta nel 1983,la Cascina rappresenta un simbolo di legalità e impegno civile.    

Il portale si propone di:

- **Promuovere le attività educative** : Presenta laboratori di educazione alla legalità rivolti a scuole e gruppi.
 
- **Promuovere soggiorni educativi** : Ideali per approfondire gli effetti delle mafie sulla società e sul territorio
 
- **Facilitare le visite scolastiche** : Consente a scuole e associazioni di richiedere informazioni o prenotare le visite in cascina.
 
- **Gestire le richieste** : Una sezione riservata agli amministratori consente di monitorare e gestire le richieste ricevute.

 
## Versione tecnologie utilizzate
- **Frontend** : HTML5, CSS3, TypeScript  

- **Build Tool** : Vite 6.0.5
 
- **Package Manager** : npm 10.9.0


---

## Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/giordano-bruno-michela-its/CodeCraft_project_frontend
 
2. Vai nella directory del progetto:

```bash
cd CascinaCaccia
```
 
3. Installa le dipendenze:

```bash
npm install
```
 
3. Avvia l'applicazione inserendo in console:

```bash
npm run dev
```
 
4. Apri il browser.
```bash
vai su `http://localhost:3000`

```
5. per entrare nel backoffice digita.
```bash
vai su `http://localhost:3000/src/backoffice/index.html`

verrai reindirizzato al login o alla registrazione a seconda se è presente o meno almeno un utenza nel database
```

## jsDoc

1. Clona il repository (se non è gia stato fatto):
   ```bash
   git clone https://github.com/giordano-bruno-michela-its/CodeCraft_project_frontend
 
2. Vai nella directory del progetto (se non è gia stato fatto):

```bash
cd CascinaCaccia
```
 
3. Installa le dipendenze (se non è gia stato fatto):

```bash
npm install
```
 
3. scrivi il seguente comando in console per generare la cartella docs:

```bash
npm run generate-docs
```
 
4. scrivi il seguente comando in console per servire la cartella.
```bash
npm run serve-docs

```
5. apri il link fornito in console per vedere la documentazione.


##  Struttura del Progetto 


```bash

CascinaCaccia/               


├── index.html                         # Punto di ingresso del il progetto
├── public                             # Cartella per risorse come immagini
├── src                                # Cartella che contiene il codice sorgente.
│   ├── components                     # Cartella per la gestione dei dati inseriti nei form dagli utenti
│   │   ├── bookingFormHandler.ts              # Gestisce la logica per il modulo di prenotazione.
│   │   ├── getRetrieveReservationFormData.ts  # Funzione per ottenere i dati del modulo di recupero prenotazione.
│   │   ├── getUpdateBookingFormData.ts        # Funzione per ottenere i dati del modulo di aggiornamento prenotazione.
│   │   ├── infoFormHandler.ts                 # Gestisce la logica per il modulo informativo.
│   │   ├── navbar.ts                          # Gestisce la logica per la barra di navigazione.
│   │   └── newsletterFormHandler.ts           # Gestisce la logica per il modulo di iscrizione alla newsletter.
│   ├── main.ts                        # File che gestire la logica centrale dell'applicazione.
│   ├── pages                           # Cartella per le diverse pagine del sito.
│   │   ├── privacyPolicy.html         # Pagina per la privacy policy.
│   │   ├── retrieveReservation/        # Directory per la pagina di recupero prenotazione 
│   │   └── updateBooking/              # Directory per la pagina di aggiornamento prenotazione
│   ├── services                        # Cartella gestire l'API.
│   │   └── api.ts                     # Gestisce le chiamate API.
│   ├── style.css                       # File che contiene gli import di tutti gli style dell'applicazione contenuti nella cartella styles
│   ├── styles                          # Cartella per i file CSS.
│   │   ├── activitiesSection.css      # Stile per la sezione delle attività.
│   │   ├── faqSection.css             # Stile per la sezione delle FAQ.
│   │   ├── footer.css                 # Stile per il footer del sito.
│   │   ├── forms.css                  # Stile per i form.
│   │   ├── heroSection.css            # Stile per la sezione introduttiva
│   │   ├── navbar.css                 # Stile per la barra di navigazione.
│   │   ├── newsletter.css             # Stile per la sezione della newsletter.
│   │   ├── offersSection.css          # Stile per la sezione delle offerte.
│   │   ├── privacyPolicy.css          # Stile per la pagina della politica sulla privacy.
│   │   ├── toast.css                  # Stile per i messaggi di toast.
│   │   └── visitSection.css           # Stile per la sezione delle visite.
│   ├── types                           # Cartella per i tipi TypeScript.
│   │   └── types.ts                   # Definisce i tipi personalizzati.
│   ├── utils                           # Cartella per funzioni di utilità.
│   │   ├── colorBlindFilter.ts        # Funzione per il filtro per daltonici (accessibilità).
│   │   ├── darkMode.ts                # Funzione per la gestione della modalità scura.
│   │   ├── updateBookingReservationPrefill.ts # Funzione per precompilare i dati di prenotazione.
│   │   └── utils.ts                   # Funzioni generali di utilità
│   └── vite-env.d.ts                 
├── tsconfig.json                     
├── vite.config.js                    
└── .gitignore                        

        
```