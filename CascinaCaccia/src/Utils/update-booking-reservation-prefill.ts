import { setInputValue, setSelectValueById, setTextAreaContent } from "./utils";

/**
 * Prefill the booking form with the given reservation details.
 * @param {Object} reservationDetails - Reservation details to prefill the form with.
 * @param {Date} reservationDetails.beginTime - The start date of the reservation.
 * @param {Date} reservationDetails.endTime - The end date of the reservation.
 * @param {String} reservationDetails.name - The name of the person who made the reservation.
 * @param {String} reservationDetails.surname - The surname of the person who made the reservation.
 * @param {String} reservationDetails.email - The email of the person who made the reservation.
 * @param {String} reservationDetails.association - The association of the person who made the reservation.
 * @param {String} reservationDetails.phoneNumber - The phone number of the person who made the reservation.
 * @param {Number} reservationDetails.bookingDuration.id - The id of the booking duration.
 * @param {Number} reservationDetails.participantsQuantity - The number of participants.
 * @param {Number} reservationDetails.guidesQuantity - The number of guides.
 * @param {String} [reservationDetails.additionalInfo] - The additional info of the reservation.
 * @param {Array<Object>} [reservationDetails.activityType] - The activities selected by the user.
 * @param {Number} reservationDetails.activityType.id - The id of the activity.
 */
export function prefillFields(reservationDetails: any) {
  if (!reservationDetails) return;

  // Prefill date fields
  const startDate = new Date(reservationDetails.beginTime).toISOString().split("T")[0];
  const endDate = new Date(reservationDetails.endTime).toISOString().split("T")[0];
  setInputValue("startDate", startDate);
  setInputValue("endDate", endDate);

  // Prefill basic fields
  setInputValue("name", reservationDetails.name);
  setInputValue("surname", reservationDetails.surname);
  setInputValue("boking-form-email", reservationDetails.email);
  setInputValue("association", reservationDetails.association);
  setInputValue("phoneNumber", reservationDetails.phoneNumber);

  // Prefill select field for duration
  setSelectValueById("duration", reservationDetails.bookingDuration.id);

  // Prefill participant fields
  setInputValue("nChildren", reservationDetails.participantsQuantity);
  setInputValue("nAdults", reservationDetails.guidesQuantity);

  // Prefill additional info
  if (reservationDetails.additionalInfo) {
    setTextAreaContent("additionalInfo", reservationDetails.additionalInfo);
  }

  // Prefill activities checkboxes
  if (reservationDetails.activityType) {
    reservationDetails.activityType.forEach((activity: { id: number }) => {
      const checkbox = document.querySelector(`input[name="activities"][value="${activity.id}"]`) as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = true;
      } else {
        console.warn(`Checkbox non trovato per activity ID: ${activity.id}`);
      }
    });
  } else {
    console.warn("Nessuna attività trovata in reservationDetails.activityType.");
  }
}
