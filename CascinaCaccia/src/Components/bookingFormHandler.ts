import { BookingForm } from "../Types/types";

/**
 * Extracts the values from the form and activities container and returns them as a BookingForm
 * @param activitiesContainer the activities container div element
 * @returns the BookingForm with the values from the form and activities container
 */
export function getBookingFormData(infoForm: HTMLFormElement, activitiesContainer: HTMLDivElement): BookingForm {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const surname = (document.getElementById("surname") as HTMLInputElement).value;
  const email = (document.getElementById("boking-form-email") as HTMLInputElement).value;
  const phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement).value;
  const association = (document.getElementById("association") as HTMLInputElement).value;
  const additionalInfo = (document.getElementById("additionalInfo") as HTMLTextAreaElement).value;
  const guidesQuantity = parseInt((document.getElementById("nAdults") as HTMLInputElement).value);
  const participantsQuantity = parseInt((document.getElementById("nChildren") as HTMLInputElement).value);
  const beginTime = (document.getElementById("startDate") as HTMLInputElement).value;
  const endTime = (document.getElementById("endDate") as HTMLInputElement).value;
  const contactDate = new Date().toISOString().split('T')[0];
  const formType = "FORM_BOOKING";
  const newsletterCheck = "NO";





  /* ATTENZIONE: le activities sono giuste ma quando si fa il return dei value (1,2,3,ecc) nel json vengono mandati al db che ha id sballati */
  const activities = Array.from(activitiesContainer.querySelectorAll('input[type="checkbox"]:checked')).map(
    (checkbox) => (checkbox as HTMLInputElement).value
  );


  // shorthand syntax: we can omit the value of the properties if they have the same name of the variable
  return {
    email,
    name,
    surname,
    association,
    phoneNumber,
    contactDate,
    additionalInfo,
    newsletterCheck,
    /*  "ageGroup": {
     "id": 1
   }, */
    activityType: [
      {
        id: 1,
        name: "Salto nel buio",
        description: null
      },
      {
        id: 2,
        name: "Tiro della cinghia",
        description: null
      }
    ],
    formType,
    beginTime,
    endTime,
    participantsQuantity,
    guidesQuantity,
    bookingDuration: {
      id: 1
    }
  };
}
