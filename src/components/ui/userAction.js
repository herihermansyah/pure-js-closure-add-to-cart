import createElement from "../../utils/createElement.js";
import { cartItems } from "../../store/addToCart.js";
import { containerCartCard } from "./cartCard.js";

// ================== user action ==================
// pairing entire element user action inside userAction
// create itemChange when cartItems.length > 0
// set event to toggle cart list
// create handle click outside cart list

const userAction = createElement("div");
userAction.setClass("container-user-action");

const itemChange = (userAction.element.innerHTML = `
      <p class="cart-text">Cart</p>
      <p class="cart-length">${cartItems.items.length}</p>
    `);

if (cartItems.items.length === 0) {
  userAction.setText("Cart");
}

if (cartItems.items.length > 0) {
  itemChange;
}

userAction.setEvent("click", () => {
  containerCartCard.element.classList.toggle("hidden");
});

// ================== handle click outside ==================
document.addEventListener("click", (event) => {
  const isuserAction = userAction.element.contains(event.target);
  const isWrapperCartPage = containerCartCard.element.contains(event.target);

  if (!isuserAction && !isWrapperCartPage) {
    containerCartCard.element.classList.remove("hidden");
  }
});
// ================== handle click outside ==================

export { userAction };
