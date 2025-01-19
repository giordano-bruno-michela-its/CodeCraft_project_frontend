export interface BookingForm {
  email: string;
  name: string;
  surname: string;
  association: string;
  phoneNumber: string;
  contactDate: string;
  additionalInfo: string;
  newsletterCheck: string;

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
  bookingDuration: {
    id: number;
  };
  activityType: {
    id: number;
    name: string;
    description: string | null;
  }[]; // Array dei tipi di attività
}

export interface FormDataRequest {
  email: string;
  name: string;
  surname: string;
  association: string;
  phoneNumber: string;
  contactDate: string;
  additionalInfo: string;
  newsletterCheck: null | string; // Considerando che potrebbe essere stringa o null
  /* ageGroup: {
    id: number;
  }; */
  activityType: {
    id: number;
    name: string;
    description: string;
  }[];
  formType: string;
}

export interface NewsletterForm {
  email: string;
  name: string;
  surname: string;
  contactDate: string;
  newsletterCheck: string;
  formType: string;
}

export interface RetrieveReservationForm {
  email: string;
}
