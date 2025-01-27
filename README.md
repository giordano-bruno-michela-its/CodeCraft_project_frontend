# Agora

Un portale dedicato alla promozione di Cascina Caccia, con iniziative per l'educazione alla legalità, eventi culturali e visite scolastiche.

---

## Descrizione

Agora è un portale educativo e promozionale che si propone di valorizzare Cascina Caccia, uno dei beni confiscati alla mafia più importanti del Piemonte. Dedicata alla memoria di Bruno Caccia, magistrato ucciso a Torino dalla ‘ndrangheta nel 1983, la Cascina rappresenta un simbolo di legalità e impegno civile.

Il portale si propone di:

- **Promuovere le attività educative** : Presenta laboratori di educazione alla legalità rivolti a scuole e gruppi.

- **Promuovere soggiorni educativi** : Ideali per approfondire gli effetti delle mafie sulla società e sul territorio

- **Facilitare le visite scolastiche** : Consente a scuole e associazioni di richiedere informazioni o prenotare le visite in cascina.

- **Gestire le richieste** : Una sezione riservata agli amministratori consente di monitorare e gestire le richieste ricevute.

---

## Navigazione e usabilità

### Landing page Agora

Aprendo [la pagina](#installazione), troverete subito la sezione principale. In alto vi è un menu di navigazione con:

- Un toggle per attivare la modalità chiaro/scuro.

- Un toggle per attivare il filtro daltonismo.

- Tutte le voci relative alle sezioni del sito, che vi porteranno direttamente alla sezione cliccata.

Sempre nella sezione principale, ci sono due pulsanti:

- **Prenota** : vi porterà al form di prenotazione.

- **Chiedi informazioni** : vi porterà al form per richiedere informazioni.

Successivamente, troverete una sezione di benvenuto.

Scorrendo più in basso, incontrerete la sezione delle attività della cascina. Qui ci sono delle card che, se cliccate, mostreranno:

- Informazioni dettagliate sull'attività selezionata.

- Un carosello con immagini legate all'attività.

Nella sezione successiva troverete il form per richiedere informazioni. Potrete inserire i vostri dati e selezionare le attività su cui volete saperne di più. Dopo aver compilato il form:

- Se i dati sono corretti, apparirà un messaggio di conferma.

- In caso di errori, verrà mostrato un messaggio di errore.

Una volta inviato il form, gli amministratori riceveranno una notifica e voi riceverete una mail di conferma con la presa in carico della richiesta.

Nella sezione **"Esperienze di formazione e comunità"** troverete card con informazioni sui soggiorni disponibili alla cascina. Cliccando su una card, vedrete più dettagli.
Inoltre, è presente un elenco con i metodi di pagamento accettati.

Successivamente, troverete il form di prenotazione. Anche qui, dopo aver compilato correttamente i dati:

- Apparirà un messaggio di conferma.

- Se ci sono errori, sarà mostrato un messaggio di errore.

Gli amministratori riceveranno una notifica e voi una mail di conferma con un codice e un link. Questo codice e il link serviranno per accedere a una pagina dedicata, dove potrete correggere eventuali errori nel form di prenotazione e inviarlo di nuovo.

Nella sezione **Newsletter** , potrete iscrivervi per ricevere aggiornamenti e novità, inserendo nome, cognome e indirizzo email.  
La sezione **FAQ** contiene le domande più frequenti. Cliccando su una domanda, poterte vedere la relativa risposta.  
Infine, nel **footer** troverete tutte le informazioni utili sulla cascina e una mappa per raggiungerla.

### Backoffice

Una volta raggiunto il [backoffice](#installazione),

- Se non è presente almeno un'utenza nel database, il sistema richiederà di effettuare una registrazione. Una volta completata, sarete reindirizzati alla pagina di login.

  - La prima utenza registrata sarà automaticamente assegnata come **superadmin** del backoffice.

- Se è già presente almeno un'utenza, sarà richiesto di effettuare il login direttamente e ciò vorrà dire che un super admin ha creato un utenza per voi.

#### Dashboard delle Prenotazioni

Dopo aver effettuato il login, verrà mostrata la **dashboard delle prenotazioni** , che presenta le prenotazioni ordinate cronologicamente (dalla più vecchia alla più recente). La dashboard è suddivisa in due colonne principali:

1. **Lista Richieste** (colonna sinistra): prenotazioni in attesa di conferma.

2. **Prossime Prenotazioni** (colonna destra): prenotazioni già confermate.

#### Funzionalità della Dashboard:

- **Prenotazioni da confermare** :

  - Cliccando su una prenotazione nella colonna "Lista Richieste", si aprirà un modale con tutte le informazioni relative alla prenotazione.

  - All'interno del modale, sarà presente un tasto **"Conferma"** : cliccandolo, la prenotazione verrà spostata nella colonna "Prossime Prenotazioni".

- **Prenotazioni confermate** :

  - Cliccando su una prenotazione nella colonna "Prossime Prenotazioni", si aprirà un modale con tutte le informazioni relative alla prenotazione.

  - Nel modale sarà disponibile un tasto **"Cancella Prenotazione"** : cliccandolo, la prenotazione verrà spostata nuovamente nella colonna "Lista Richieste".

#### Menù di Navigazione

Il menù di navigazione varia in base al tipo di utenza:

1. **Superadmin** :
   Il superadmin ha accesso alle seguenti sezioni:

- **Dashboard** : per gestire le prenotazioni.

- **Registra Nuova Utenza** : per creare un account admin aggiuntivo.

- **Modifica Mail Cascina** : per aggiornare l'indirizzo email ufficiale della cascina utilizzato per le comunicazioni con gli utenti.

- **Scarica Mail** : per scaricare un elenco delle email degli utenti iscritti alla newsletter.

- **Logout** : per uscire dal sistema.

2. **Admin Normale** :
   L'admin normale ha accesso alle seguenti sezioni:

- **Dashboard** : per gestire le prenotazioni.

- **Scarica Mail** : per ottenere un elenco delle email degli iscritti alla newsletter.

- **Logout** : per uscire dal sistema.

## Versione delle tecnologie utilizzate

- **Frontend** : HTML5, CSS3, TypeScript

- **Build Tool** : Vite 6.0.5

- **Package Manager** : npm 10.9.0

---

## Installazione

1. Clona il repository:

   ```bash
   git clone https://github.com/giordano-bruno-michela-its/CodeCraft_project_frontend

   ```

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

   ```

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

## Struttura del Progetto

```bash

CascinaCaccia/


├── index.html                         # Punto di ingresso del il progetto
├── public                             # Cartella per risorse come immagini
├── src                                # Cartella che contiene il codice sorgente.
│   ├── components                     # Cartella per la gestione dei dati inseriti nei form dagli utenti
│   │   ├── bookingFormHandler.ts
│   │   ├── getRetrieveReservationFormData.ts
│   │   ├── getUpdateBookingFormData.ts
│   │   ├── infoFormHandler.ts
│   │   ├── navbar.ts
│   │   └── newsletterFormHandler.ts
│   ├── main.ts                        # File che gestire la logica centrale dell'applicazione.
│   ├── pages                           # Cartella per le diverse pagine del sito.
│   │   ├── privacyPolicy.html         # Pagina per la privacy policy.
│   │   ├── retrieveReservation/        # Directory per la pagina di recupero prenotazione
│   │   └── updateBooking/              # Directory per la pagina di aggiornamento prenotazione
│   ├── services                        # Cartella contenente file per gestire API.
│   │   └── api.ts
│   ├── style.css                       # File che contiene gli import di tutti gli style dell'applicazione contenuti nella cartella styles
│   ├── styles                          # Cartella per i file CSS.
│   │   ├── activitiesSection.css
│   │   ├── faqSection.css
│   │   ├── footer.css
│   │   ├── forms.css
│   │   ├── heroSection.css
│   │   ├── navbar.css
│   │   ├── newsletter.css
│   │   ├── offersSection.css
│   │   ├── privacyPolicy.css
│   │   ├── toast.css
│   │   └── visitSection.css
│   ├── types                           # Cartella per i tipi TypeScript.
│   │   └── types.ts
│   ├── utils                           # Cartella per funzioni di utilità.
│   │   ├── colorBlindFilter.ts        # Gestione filtro per daltonici.
│   │   ├── darkMode.ts                # Gestione della modalità scura.
│   │   ├── updateBookingReservationPrefill.ts # Gestione precompilazione dati di prenotazione.
│   │   └── utils.ts                   # Funzioni generali di utilità
│   └── vite-env.d.ts
├── tsconfig.json
├── vite.config.js
└── .gitignore


```
