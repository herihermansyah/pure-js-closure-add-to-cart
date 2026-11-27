import formaterCurrency from "../../libs/formatCurrency.js";
import { cartItems } from "../../store/addToCart.js";
import createElement from "../../utils/createElement.js";

// ================== cart card ==================
// render entire item cart with renderItemCart function
// containerCartCard container to style cart list

const main = document.getElementById("main");

// ================== container cart list ==================
const containerCartCard = createElement("div");
containerCartCard.setClass("container-list-cart");
// ================== container cart list ==================

// ================== container cart ==================
const containerCart = createElement("div");
containerCart.setClass("container-cart");
// ================== container cart ==================

main.appendChild(containerCartCard.element);
containerCartCard.element.appendChild(containerCart.element);

// ================== render item cart ==================
function renderCartCard(product) {
  // ================== container list items ==================
  const containerListItems = createElement("div");
  containerListItems.setClass("container-list-items");
  // ================== container list items ==================

  // ================== container cart items ==================
  const containerCartItems = createElement("div");
  containerCartItems.setClass("container-cart-items");
  // ================== container cart items ==================

  // ================== id ==================
  const id = createElement("span");
  id.setClass("container-cart-id");
  id.setText(`Id : ${product.id}`);
  // ================== id ==================

  // ================== image ==================
  const cartImage = createElement("img");
  cartImage.setClass("container-cart-image");
  cartImage.setAttribute("src", `${product.thumbnail}`);
  cartImage.setAttribute("alt", "Product Image");
  cartImage.setAttribute("width", "200");
  cartImage.setAttribute("height", "200");
  // ================== image ==================

  // ================== price ==================
  const price = createElement("p");
  price.setClass("container-cart-price");
  price.setText(`Price : ${formaterCurrency(product.price)}`);
  // ================== price ==================

  // ================== title ==================
  const title = createElement("h3");
  title.setClass("container-cart-title");
  title.setText(`Name : ${product.title}`);
  // ================== title ==================

  // ================== container quantity ==================
  const containerQuantity = createElement("div");
  containerQuantity.setClass("container-quantity");
  // ================== container quantity ==================

  // ================== quantity text ==================
  const quantityText = createElement("p");
  quantityText.setText("Quantity : ");
  quantityText.setClass("container-quantity-text");
  // ================== quantity text ==================

  // ================== decrease button ==================
  const decreaseButton = createElement("button");
  decreaseButton.setClass("container-quantity-decrease");
  decreaseButton.setText("-");
  // ================== decrease button ==================

  // ================== quantity length ==================
  const quantityLength = createElement("p");
  quantityLength.setClass("container-quantity-length");
  quantityLength.setText(`${product.quantity}`);
  // ================== quantity length ==================

  // ================== increase button ==================
  const increaseButton = createElement("button");
  increaseButton.setClass("container-quantity-increase");
  increaseButton.setText("+");
  // ================== increase button ==================

  // ================== wrapper increase button ==================
  const containerIncreaseDecrease = createElement("div");
  containerIncreaseDecrease.setClass("container-increase-decrease");
  // ================== wrapper increase button ==================

  // ================== pairing quantity ==================
  containerIncreaseDecrease.element.appendChild(decreaseButton.element);
  containerIncreaseDecrease.element.appendChild(quantityLength.element);
  containerIncreaseDecrease.element.appendChild(increaseButton.element);

  containerQuantity.element.appendChild(quantityText.element);
  containerQuantity.element.appendChild(containerIncreaseDecrease.element);
  //    ================== pairing quantity ==================

  //    ================== total price ==================
  const totalPrice = createElement("p");
  totalPrice.setClass("container-cart-total-price");
  totalPrice.setText(`Total Price : ${formaterCurrency(product.totalPrice)}`);
  //    ================== total price ==================

  containerListItems.element.appendChild(cartImage.element);
  containerListItems.element.appendChild(containerCartItems.element);
  containerCartItems.element.appendChild(id.element);
  containerCartItems.element.appendChild(title.element);
  containerCartItems.element.appendChild(price.element);
  containerCartItems.element.appendChild(containerQuantity.element);
  containerCartItems.element.appendChild(totalPrice.element);
  containerCart.element.appendChild(containerListItems.element);
}

export { containerCartCard, renderCartCard };
