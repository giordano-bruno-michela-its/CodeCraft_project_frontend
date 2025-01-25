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

export function activityCards(): void {
  const activitiesCardHeaders = document.querySelectorAll(".activity-card-header");
  // const activitiesCard = document.querySelectorAll(".activity-card");
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

export function setUpPaymentMethodsBtns() {
  const bonificoBtn = document.getElementById('bonifico-btn') as HTMLButtonElement;
  const contantiBtn = document.getElementById('contanti-btn') as HTMLButtonElement;
  const bonificoIcon = document.querySelector('#bonifico-btn img') as HTMLImageElement;
  const contantiIcon = document.querySelector('#contanti-btn img') as HTMLImageElement;
  const instructionsParagraph = document.getElementById('payment-method-instructions') as HTMLParagraphElement;
  const bonificoData = document.getElementById('bonifico-only-text') as HTMLDivElement;

  bonificoBtn.addEventListener('click', () => {
    if(!bonificoBtn.classList.contains('clicked')) {
      // add and removes clicked class
      bonificoBtn.classList.add('clicked');
      contantiBtn.classList.remove('clicked');

      // changes the icons
      bonificoIcon.src = './public/assets/offersSection/bonifico-active-icon.svg';
      contantiIcon.src = './public/assets/offersSection/cash-icon.svg';

      // changes the content of the instructions paragraph and shows / hides the bonifico data
      instructionsParagraph.textContent = 'Pagamento entro 30 giorni prima del soggiorno.';
      bonificoData.classList.remove('hidden');
    }
  })

  contantiBtn.addEventListener('click', () => {
    if(!contantiBtn.classList.contains('clicked')) {
      // add and removes clicked class
      contantiBtn.classList.add('clicked');
      bonificoBtn.classList.remove('clicked');

      // changes the icons
      bonificoIcon.src = './public/assets/offersSection/bonifico-icon.svg';
      contantiIcon.src = './public/assets/offersSection/cash-active-icon.svg';

      // changes the content of the instructions paragraph and shows / hides the bonifico data
      instructionsParagraph.textContent = 'Possibilità di pagamento in contanti al momento dell\'arrivo.';
      bonificoData.classList.add('hidden');
    }
  })
}

/**
 * Enables or disables the submit button of the booking form depending on the
 *  checked state of the consent checkbox.
 */
export function enableDisableSbmtBtnBookingForm(): void {
  const submitButton = document.getElementById("booking-form-submit-btn") as HTMLButtonElement;
  const consentCheckbox = document.getElementById("option1") as HTMLInputElement;

  // Enable and disable submit form btn
  consentCheckbox.addEventListener("change", () => {
    submitButton.disabled = !consentCheckbox.checked;
  });
}

/**
 * Enables or disables the submit button of the info form depending on the
 * checked state of the newsletter consent checkbox.
 */
export function enableDisableSbmtBtnInfoForm(): void {
  const submitButton = document.getElementById("info-form-submit-btn") as HTMLButtonElement;
  const consentCheckbox = document.getElementById("info-form-input") as HTMLInputElement;

  // Enable and disable submit form btn
  consentCheckbox.addEventListener("change", () => {
    submitButton.disabled = !consentCheckbox.checked;
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
