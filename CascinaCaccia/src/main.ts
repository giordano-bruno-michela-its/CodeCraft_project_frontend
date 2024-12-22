import { initializeAgeGroupSelector } from "./Components/ageGroupActivities";
import { setupFormHandlers } from "./Components/infoFormHandler";

document.addEventListener("DOMContentLoaded", () => {
  initializeAgeGroupSelector();
  setupFormHandlers();
});
