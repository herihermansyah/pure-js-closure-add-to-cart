import createElement from "../../utils/createElement.js";

const navigationData = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
];

const wrapperNavigation = createElement("ul");
wrapperNavigation.setClass("navigation");

function renderNavigation(item) {
  const li = createElement("li");
  li.setClass("navigation-item");
  const a = createElement("a");
  a.setText(item.name);
  a.setClass("navigation-link");
  a.setAttribute("href", item.href);
  li.element.appendChild(a.element);
  wrapperNavigation.element.appendChild(li.element);
}

export { wrapperNavigation, renderNavigation, navigationData };
