const darkModeToggle = document.getElementById("darkmode-toggle") as HTMLInputElement;

/**
 * Adds an event listener to the dark mode toggle checkbox. When the checkbox state changes,
 * it toggles the "dark-mode" class on the document body, enabling or disabling dark mode.
 */

export const toggleDarkMode = () => {
  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", () => {
      if (darkModeToggle.checked) {
        document.body.style.setProperty("--text-light", "#3d3c3c");
        document.body.style.setProperty("--text-dark", "#fafafa");
        document.body.classList.add("dark-mode");
      } else {
        document.body.style.setProperty("--text-light", "#fafafa");
        document.body.style.setProperty("--text-dark", "#3d3c3c");
        document.body.classList.remove("dark-mode");
      }
    });
  }
};
