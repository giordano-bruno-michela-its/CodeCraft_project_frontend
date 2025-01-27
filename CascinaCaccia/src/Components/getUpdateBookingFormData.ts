/**
 * Extracts the values from the BookingForm form
 * @returns The values of the form
 */
export function getUpdateBknFormData() {

  const logParseChildren =  parseInt((document.getElementById("nChildren") as HTMLInputElement).value);
  const logNoParseChildren =  ((document.getElementById("nChildren") as HTMLInputElement).value);
console.log(logParseChildren);
console.log(logNoParseChildren);

  

  return {
    startDate: (document.getElementById("startDate") as HTMLInputElement).value,
    endDate: (document.getElementById("endDate") as HTMLInputElement).value,
    name: (document.getElementById("name") as HTMLInputElement).value,
    surname: (document.getElementById("surname") as HTMLInputElement).value,
    email: (document.getElementById("boking-form-email") as HTMLInputElement).value,
    association: (document.getElementById("association") as HTMLInputElement).value,
    phoneNumber: (document.getElementById("phoneNumber") as HTMLInputElement).value,
    nChildren: parseInt((document.getElementById("nChildren") as HTMLInputElement).value),
    nAdults: parseInt((document.getElementById("nAdults") as HTMLInputElement).value),
    additionalInfo: (document.getElementById("additionalInfo") as HTMLTextAreaElement).value,
    
  };







  
}
