import createElement from "../utils/createElement.js";
import logo from "../components/ui/logo.js";
import {
  wrapperNavigation,
  renderNavigation,
  navigationData,
} from "../components/ui/menuNavigation.js";
import {userInterface} from "./ui/userInterface.js";

const header = document.getElementById("header");

// logo
header.appendChild(logo.element);

// wrapper nav and userinterface

const sectionRight = createElement("div");
sectionRight.setClass("section-right");

header.appendChild(sectionRight.element);

sectionRight.element.appendChild(wrapperNavigation.element);
sectionRight.element.appendChild(userInterface.element);

navigationData.forEach((item) => {
  renderNavigation(item);
});
