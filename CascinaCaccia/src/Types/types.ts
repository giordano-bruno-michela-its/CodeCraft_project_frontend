export interface FormDataRequest {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  association: string;
  ageGroup: string;
  activities: string[];
  additionalInfo: string;
}
export interface FormDataBooking {}

export type ActivitiesByAgeGroup = {
  [key: string]: string[];
};
