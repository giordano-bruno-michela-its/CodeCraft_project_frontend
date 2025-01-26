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


## 5. Struttura del Progetto 


```bash

CascinaCaccia/                # Componenti principali
        public/
        ├── assets/               #Cartella con immagini
        src/
        ├── Components/                # Componenti principali
                ├── bookingFormHandler.ts         # Stili globali 
                ├── getRetrieveReservationFormData.ts         # Stili globali 
                ├── getUpdateBookingFormData.ts        # Stili globali 
                ├── infoFormHandler.ts         # Stili globali 
        ├── Pages/         # Stili globali
        ├── Services/         # Stili globali
        ├── Types/         # Stili globali
        ├── Utils/         # Stili globali
        ├── backoffice/         # Stili globali
        ├── styles/         # Stili globali
        ├── main.ts/         # Stili globali
        ├── style.css/         # Stili globali
        index.html          # File HTML principale



README.md                      #file che stai leggendo in questo momento
        
```