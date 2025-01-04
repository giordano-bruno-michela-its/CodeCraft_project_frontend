export interface BookingForm {
  email: string;
  name: string;
  surname: string;
  association: string;
  phoneNumber: string;
  contactDate: string; 
  additionalInfo: string; 
 /*  fasciaEta: {
    id: number; 
    denominazione: string; 
    descrizione: string; 
    etaMin: number; 
    etaMax: number; 
  }; */
  formType: string; 
  beginTime: string; 
  endTime: string; 
  participantsQuantity: number; 
  guidesQuantity: number; 
  activityType: {
    id: number; 
    name: string; 
    description: string | null; 
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
