import { getElement, removeClass, toggleClass } from "../Utils/utils";

/**
 * Initializes navbar behavior.
 * Adds event listeners to open and close the navbar
 * and to remove the “open” class when clicking on a link.
 */
export const initNavbar = (): void => {
  const hamburger = getElement<HTMLElement>(".navbar-hamburger");
  const navbarMenu = getElement<HTMLElement>(".navbar-menu");
  const links = document.querySelectorAll<HTMLAnchorElement>(".navbar-link");

  hamburger.addEventListener("click", () => {
    toggleClass(navbarMenu, "open");
    toggleClass(hamburger, "open");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      removeClass(navbarMenu, "open");
      removeClass(hamburger, "open");
    });
  });
};
