const colorblindFilter = document.getElementById("colorblind-filter") as HTMLInputElement;

/**
 * Adds an event listener to the "colorblind-filter" checkbox.
 * When the checkbox state changes, it toggles the "colorblind-mode" class on the document body.
 * Enabling the filter applies a grayscale style to the page for better accessibility.
 */
export const toggleColorblindFilter = () => {
  if (colorblindFilter) {
    colorblindFilter.addEventListener("change", () => {
      if (colorblindFilter.checked) {
        document.body.classList.add("colorblind-mode");
      } else {
        document.body.classList.remove("colorblind-mode");
      }
    });
  }
};
