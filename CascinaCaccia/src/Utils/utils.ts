/**
 * Toggles the visibility of the answer for a specific FAQ item.
 * @param {number} index - The index of the FAQ item to toggle.
 */
export function toggleAnswer(index: number): void {
  const faqCards = document.querySelectorAll(".faq-card");
  const faqCard = faqCards[index];

  // Toggle the 'open' class
  faqCard.classList.toggle("open");
}

/**
 * Sets up a toggle button to show or hide the given container.
 * @param {HTMLButtonElement} toggleButton - The button that will be clicked to toggle the visibility of the container.
 * @param {HTMLDivElement} container - The container that will be shown or hidden.
 */
export function setupActivitiesToggle(toggleButton: HTMLButtonElement, container: HTMLDivElement): void {
  toggleButton.addEventListener("click", () => {
    const isHidden = container.style.display === "none" || window.getComputedStyle(container).display === "none";
    container.style.display = isHidden ? "flex" : "none";
    toggleButton.textContent = isHidden ? "Nascondi Attività" : "Mostra Attività";
    toggleButton.setAttribute("aria-expanded", isHidden.toString());
  });
}

// navbar Utils

/**
 * Toggle a CSS class on an element.
 * @param {HTMLElement} element - The element on which to toggle the class.
 * @param {string} className - The name of the class to toggle.
 */
export const toggleClass = (element: HTMLElement, className: string): void => {
  element.classList.toggle(className);
};

/**
 * Removes a CSS class from an element.
 * @param {HTMLElement} element - The element from which to remove the class.
 * @param {string} className - The name of the class to remove.
 */
export const removeClass = (element: HTMLElement, className: string): void => {
  element.classList.remove(className);
};

/**
 * Finds an element in the DOM using a CSS selector.
 * @param {string} selector - The CSS selector to use to find the element.
 * @returns {T} The element found, or throws an Error if no element is found.
 */
export const getElement = <T extends HTMLElement>(selector: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Elemento non trovato: ${selector}`);
  }
  return element;
};

/**
 * Toggle the "open" CSS class on activity card headers, and toggle the "hidden" CSS class on the details and button
 * elements inside the card header. This allows the user to click on the card header to show/hide the card details.
 */
export function activityCards(): void {
  const activitiesCardHeaders = document.querySelectorAll(".activity-card-header");
  activitiesCardHeaders.forEach((cardHead) => {
    cardHead.addEventListener("click", () => {
      if (cardHead.parentElement) {
        cardHead.parentElement.classList.toggle("open");
        cardHead.children[1].classList.toggle("hidden");
        cardHead.children[2].classList.toggle("hidden");
      }
    });
  });
}

/**
 * Sets up event listeners on each of the offer cards to toggle the
 *  visibility of the offer details when the toggle button is clicked.
 */
export function setupOfferCards(): void {
  const offerCards = document.querySelectorAll(".offer-card");

  offerCards.forEach((card) => {
    const toggleButton = card.querySelector(".offer-toggle") as HTMLButtonElement;

    toggleButton.addEventListener("click", () => {
      card.classList.toggle("open");
    });
  });
}

/**
 * Sets up event listeners for payment method buttons to toggle between "Bonifico" and "Contanti" payment options.
 * Updates the button styles, icons, and instructions based on the selected payment method.
 * When the "Bonifico" button is clicked, it highlights the button, changes the icon, updates the instructions,
 * and displays the bonifico data. When the "Contanti" button is clicked, it highlights the button, changes the icon,
 * updates the instructions, and hides the bonifico data.
 */
export function setUpPaymentMethodsBtns() {
  const bonificoBtn = document.getElementById("bonifico-btn") as HTMLButtonElement;
  const contantiBtn = document.getElementById("contanti-btn") as HTMLButtonElement;
  const bonificoIcon = document.querySelector("#bonifico-btn img") as HTMLImageElement;
  const contantiIcon = document.querySelector("#contanti-btn img") as HTMLImageElement;
  const instructionsParagraph = document.getElementById("payment-method-instructions") as HTMLParagraphElement;
  const bonificoData = document.getElementById("bonifico-only-text") as HTMLDivElement;

  bonificoBtn.addEventListener("click", () => {
    if (!bonificoBtn.classList.contains("clicked")) {
      // add and removes clicked class
      bonificoBtn.classList.add("clicked");
      contantiBtn.classList.remove("clicked");

      // changes the icons
      bonificoIcon.src = "./public/assets/offersSection/bonifico-active-icon.svg";
      contantiIcon.src = "./public/assets/offersSection/cash-icon.svg";

      // changes the content of the instructions paragraph and shows / hides the bonifico data
      instructionsParagraph.textContent = "Pagamento entro 30 giorni prima del soggiorno.";
      bonificoData.classList.remove("hidden");
    }
  });

  contantiBtn.addEventListener("click", () => {
    if (!contantiBtn.classList.contains("clicked")) {
      // add and removes clicked class
      contantiBtn.classList.add("clicked");
      bonificoBtn.classList.remove("clicked");

      // changes the icons
      bonificoIcon.src = "./public/assets/offersSection/bonifico-icon.svg";
      contantiIcon.src = "./public/assets/offersSection/cash-active-icon.svg";

      // changes the content of the instructions paragraph and shows / hides the bonifico data
      instructionsParagraph.textContent = "Possibilità di pagamento in contanti al momento dell'arrivo.";
      bonificoData.classList.add("hidden");
    }
  });
}

/**
 * Shows a toast notification with the given message and type.
 * @param {string} message - The message to display in the toast.
 * @param {string} type - The type of the toast. Can be "success", "error", or "info".
 */
export function showToast(message: string, type: string) {
  const toastContainer = document.getElementById("toast-container") as HTMLDivElement;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

/**
 * Sets the value of an HTML input element with the given ID.
 * @param {string} id - The ID of the element to set the value for.
 * @param {string} value - The value to set for the element.
 */
export function setInputValue(id: string, value: string) {
  const element = document.getElementById(id) as HTMLInputElement;
  if (element) {
    element.value = value;
  }
}

/**
 * Sets the selected option of a select element by its numerical value.
 * @param {string} id - The ID of the select element to update.
 * @param {number} value - The numerical value to match and select within the options.
 * Logs a warning if no matching option is found.
 */
export function setSelectValueById(id: string, value: number) {
  const selectElement = document.getElementById(id) as HTMLSelectElement;
  if (selectElement) {
    const options = Array.from(selectElement.options);
    const matchingOption = options.find((option) => parseInt(option.value) === value);
    if (matchingOption) {
      matchingOption.selected = true;
    } else {
      console.warn(`Nessuna opzione trovata per il valore: ${value}`);
    }
  }
}

/**
 * Sets the text content of a textarea element with the given ID.
 * @param {string} id - The ID of the textarea element to update.
 * @param {string} value - The text content to set for the textarea element.
 */
export function setTextAreaContent(id: string, value: string) {
  const textArea = document.getElementById(id) as HTMLTextAreaElement;
  if (textArea) {
    textArea.textContent = value;
  }
}

/**
 * Adds a submit event listener to all forms on the page to validate the privacy consent checkbox.
 * Prevents form submission if the checkbox is not checked, displaying a warning message.
 * If the checkbox is checked, clears the message and dispatches a custom "validatedSubmit" event.
 * Handles different forms by their IDs and associated checkbox elements.
 */
export function controlCheckboxForm() {
  const forms = document.querySelectorAll<HTMLFormElement>("form");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // checkbox privacy
      let checkbox: HTMLInputElement | null = null;

      if (form.id === "infoForm") {
        checkbox = form.querySelector<HTMLInputElement>("#info-form-input");
      } else if (form.id === "bookingForm") {
        checkbox = form.querySelector<HTMLInputElement>("#option1");
      } else if (form.id === "newsletter-email-form") {
        checkbox = form.querySelector<HTMLInputElement>("#newsletter-checkbox");
      }

      // Seleziona l'elemento per il messaggio
      const messageElement = form.querySelector<HTMLParagraphElement>(".checkbox-message");

      if (checkbox && messageElement) {
        if (!checkbox.checked) {
          messageElement.textContent = "Devi accettare i termini di privacy per continuare.";
          messageElement.style.color = "red";
          messageElement.style.display = "block";
          return;
        } else {
          messageElement.textContent = "";
          messageElement.style.display = "none";
        }
      }

      // if validation is ok, we send a custom event for submit forms in main.ts
      form.dispatchEvent(new Event("validatedSubmit"));
    });
  });
}
