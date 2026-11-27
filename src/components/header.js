import createElement from "../utils/createElement.js";
import logo from "../components/ui/logo.js";
import {
  containerNavigation,
  renderNavigation,
  navigationData,
} from "../components/ui/menuNavigation.js";
import { userAction } from "./ui/userAction.js";

// ================== header layout ==================
// call a logo element and pairing inside header element
// create section right to contains menu navigation and user action element
// loop or render navigation data use foreach method
// create handle scrollY | up and down | target header

const header = document.querySelector("header");

// ================== section right side ==================
const sectionRight = createElement("div");
sectionRight.setClass("section-right");
// ================== section right side ==================

// ================== render navigation data menu ==================
navigationData.forEach((item) => {
  renderNavigation(item);
});
// ================== render navigation data menu ==================

// ================== handle scrollY up and down header ==================
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  let currentCcrollY = window.scrollY;
  if (currentCcrollY > lastScrollY && currentCcrollY > 50) {
    header.classList.add("visible");
  } else if (currentCcrollY < lastScrollY) {
    header.classList.remove("visible");
  }
  lastScrollY = currentCcrollY;
});
// ================== handle scrollY up and down header ==================

header.appendChild(logo.element);
header.appendChild(sectionRight.element);

sectionRight.element.appendChild(containerNavigation.element);
sectionRight.element.appendChild(userAction.element);
