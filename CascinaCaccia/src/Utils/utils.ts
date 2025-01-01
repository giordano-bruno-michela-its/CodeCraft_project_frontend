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


export function activityCards():void {
  const activitiesCard = document.querySelectorAll(".activity-card");
 activitiesCard.forEach((card)=>{
    card.addEventListener("click", ()=>{
      card.classList.toggle("open");
    })
  }) 

}

/* CAROSELLO (capire se da tenere) */
export function activityCarousel():void{
  const track = document.querySelector('.carousel-track') as HTMLElement;
  const slides = Array.from(track.children) as HTMLElement[];
  const dotsNav = document.querySelector('.carousel-dots') as HTMLElement;
  const prevButton = document.querySelector('.prev-btn') as HTMLButtonElement;
  const nextButton = document.querySelector('.next-btn') as HTMLButtonElement;
  

let currentIndex = 0;

// Create dots
slides.forEach((_, index) => {
  const button = document.createElement('button');
  if (index === 0) button.classList.add('active');
  dotsNav.appendChild(button);
});

const dots = Array.from(dotsNav.children);

// Update carousel position
function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Swipe for mobile
let startX = 0;
track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX < startX - 50) {
    currentIndex = (currentIndex + 1) % slides.length; // Swipe left
  } else if (endX > startX + 50) {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Swipe right
  }
  updateCarousel();
});

// Button navigation
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

// Dots navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Initialize
updateCarousel();

}

