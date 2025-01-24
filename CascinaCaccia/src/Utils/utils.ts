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

/* CAROSELLO (capire se da tenere) */
// export function activityCarousel(): void {
//   const track = document.querySelector(".carousel-track") as HTMLElement;
//   const slides = Array.from(track.children) as HTMLElement[];
//   const dotsNav = document.querySelector(".carousel-dots") as HTMLElement;
//   const prevButton = document.querySelector(".prev-btn") as HTMLButtonElement;
//   const nextButton = document.querySelector(".next-btn") as HTMLButtonElement;

//   let currentIndex = 0;

//   // Create dots
//   slides.forEach((_, index) => {
//     const button = document.createElement("button");
//     if (index === 0) button.classList.add("active");
//     dotsNav.appendChild(button);
//   });

//   const dots = Array.from(dotsNav.children);

//   // Update carousel position
//   function updateCarousel() {
//     const slideWidth = slides[0].getBoundingClientRect().width;
//     track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//     dots.forEach((dot, index) => {
//       dot.classList.toggle("active", index === currentIndex);
//     });
//   }

//   // Swipe for mobile
//   let startX = 0;
//   track.addEventListener("touchstart", (e) => {
//     startX = e.touches[0].clientX;
//   });

//   track.addEventListener("touchend", (e) => {
//     const endX = e.changedTouches[0].clientX;
//     if (endX < startX - 50) {
//       currentIndex = (currentIndex + 1) % slides.length; // Swipe left
//     } else if (endX > startX + 50) {
//       currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Swipe right
//     }
//     updateCarousel();
//   });

//   // Button navigation
//   prevButton.addEventListener("click", () => {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     updateCarousel();
//   });

//   nextButton.addEventListener("click", () => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     updateCarousel();
//   });

//   // Dots navigation
//   dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//       currentIndex = index;
//       updateCarousel();
//     });
//   });

//   // Initialize
//   updateCarousel();
// }

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
