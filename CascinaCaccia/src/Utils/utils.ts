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
    const isHidden = container.style.display === "none";
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
