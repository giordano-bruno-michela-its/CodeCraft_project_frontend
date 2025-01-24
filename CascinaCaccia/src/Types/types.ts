export interface BookingForm {
  email: string;
  name: string;
  surname: string;
  association: string;
  phoneNumber: string;
  contactDate: string;
  additionalInfo: string;
  newsletterCheck: string;
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
  }[];
}

export interface FormDataRequest {
  email: string;
  name: string;
  surname: string;
  association: string;
  phoneNumber: string;
  contactDate: string;
  additionalInfo: string;
  newsletterCheck: null | string;
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
  code: string;
}
