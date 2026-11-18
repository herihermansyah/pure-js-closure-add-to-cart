import createElement from "../utils/createElement.js";
import logo from "../components/ui/logo.js";
import {
  wrapperNavigation,
  renderNavigation,
  navigationData,
} from "../components/ui/menuNavigation.js";

const header = document.getElementById("header");

// logo
header.appendChild(logo.element);

// navigation
header.appendChild(wrapperNavigation.element);

navigationData.forEach((item) => {
  renderNavigation(item);
});
