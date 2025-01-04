export interface BookingForm {
  email: string;
  nome: string;
  cognome: string;
  ente: string;
  telefono: string;
  dataContatto: string; 
  descrizione: string; 
 /*  fasciaEta: {
    id: number; 
    denominazione: string; 
    descrizione: string; 
    etaMin: number; 
    etaMax: number; 
  }; */
  tipoRichiesta: string; 
  dataInizio: string; 
  dataFine: string; 
  numPartecipanti: number; 
  numInsegnanti: number; 
  tipoAttivita: {
    id: number; 
    denominazione: string; 
    descrizione: string | null; 
  }[]; // Array dei tipi di attività
}

export interface FormDataRequest {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  association: string;
  activities: string[];
  additionalInfo: string;
  contactDate:string;
  formType:string;
}
