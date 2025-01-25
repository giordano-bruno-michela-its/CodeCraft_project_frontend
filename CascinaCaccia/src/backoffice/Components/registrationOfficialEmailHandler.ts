import { OfficalEmail } from "../Types/types";

export function getRegistrationOfficialMailFormData(): OfficalEmail {

    const email = (document.getElementById("officiaEmail") as HTMLInputElement).value;
    
  
    return {
      email
    };
  }
  