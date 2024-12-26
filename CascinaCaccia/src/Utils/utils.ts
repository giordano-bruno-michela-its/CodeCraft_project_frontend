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
