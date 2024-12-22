/**
 * Sets up a toggle button to show or hide the given container.
 * @param {HTMLButtonElement} toggleButton - The button that will be clicked to toggle the visibility of the container.
 * @param {HTMLDivElement} container - The container that will be shown or hidden.
 */
export function setupActivitiesToggle(toggleButton: HTMLButtonElement, container: HTMLDivElement): void {
  toggleButton.addEventListener("click", () => {
    const isHidden = container.style.display === "none";
    container.style.display = isHidden ? "block" : "none";
    toggleButton.textContent = isHidden ? "Nascondi Attività" : "Mostra Attività";
    toggleButton.setAttribute("aria-expanded", isHidden.toString());
  });
}
