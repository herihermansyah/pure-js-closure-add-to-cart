import createElement from "../../utils/createElement.js";
import { cartItems } from "../../store/addToCart.js";

const userInterface = createElement("div");
userInterface.setClass("cart-style");

const itemChange = (userInterface.element.innerHTML = `
      <p class="cart-text">Cart</p>
      <p class="cart-length">${cartItems.items.length}</p>
    `);

if (cartItems.items.length === 0) {
  userInterface.setText("Cart");
}

if (cartItems.items.length > 0) {
  itemChange;
}

console.log(cartItems.items);

export { userInterface };
