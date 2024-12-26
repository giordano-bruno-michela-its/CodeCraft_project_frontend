import { toggleAnswer } from "./Utils/utils";

// Aggiungi gli event listener quando il DOM è pronto
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question, index) => {
    question.addEventListener("click", () => toggleAnswer(index));
  });
});
