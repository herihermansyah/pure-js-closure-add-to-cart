import createElement from "../../utils/createElement.js";

// ================== navigation menu ==================
// build navigation link of the header

// ================== navigation data ==================
const navigationData = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
];
// ================== navigation data ==================

// ================== container navigation ==================
const containerNavigation = createElement("ul");
containerNavigation.setClass("container-navigation");
// ================== container navigation ==================

// ================== render navigation entire menu ==================
function renderNavigation(item) {
  // ================== list element ==================
  const li = createElement("li");
  li.setClass("container-navigation-list");
  // ================== list element ==================

  // ================== link element ==================
  const a = createElement("a");
  a.setText(item.name);
  a.setClass("container-navigation-link");
  a.setAttribute("href", item.href);
  // ================== link element ==================
  li.element.appendChild(a.element);
  containerNavigation.element.appendChild(li.element);
}

export { containerNavigation, renderNavigation, navigationData };
