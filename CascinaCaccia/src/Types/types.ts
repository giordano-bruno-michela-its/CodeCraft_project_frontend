export interface BookingForm {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  association: string;
  activities: string[];
  nAdults: number;
  nChildren: number;
  duration: string;
  startDate: string;
  endDate: string;
  additionalInfo?: string;
}
