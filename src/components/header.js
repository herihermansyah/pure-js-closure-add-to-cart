import createElement from "../utils/createElement.js";
const header = document.getElementById("header");

// logo
const logo = createElement("h1");
logo.setText("Closure Add to Cart");
logo.setClass("logo");

header.appendChild(logo.element);

// navigation
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
];

const wrapperNavigation = createElement("ul");
wrapperNavigation.setClass("navigation");

navigation.forEach((item) => {
  const li = createElement("li");
  li.setClass("navigation-item");
  const a = createElement("a");
  a.setText(item.name);
  a.setClass("navigation-link");
  a.setAttribute("href", item.href);
  li.element.appendChild(a.element);
  wrapperNavigation.element.appendChild(li.element);
});

header.appendChild(wrapperNavigation.element);

export { logo, wrapperNavigation };
