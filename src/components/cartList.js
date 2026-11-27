import formaterCurrency from "../libs/formatCurrency.js";
import { cartItems } from "../store/addToCart.js";
import createElement from "../utils/createElement.js";
import { renderCartCard, containerCartCard } from "./ui/cartCard.js";

// ================== cart list ==================
// render the renderCartCard using foreach method
// user cartitems.items to list the entire carts data
// create handle clear all cart and call the cartItems.removeAllCart
// create handle checkout payment
// show total quantity, total price and sub total price

// ================== render cart list ==================
cartItems.items.forEach((element) => {
  renderCartCard(element);
});
// ================== render cart list ==================

// ================== handle clear all cart button ==================
const clearAllCartButton = createElement("button");
clearAllCartButton.setClass("container-clear-all-cart");
clearAllCartButton.setText("Clear All Cart");
clearAllCartButton.setEvent("click", () => {
  cartItems.removeAllCart();
});
// ================== handle clear all cart button ==================

// ================== handle checkout payment button ==================
const checkoutPaymentButton = createElement("button");
checkoutPaymentButton.setClass("container-checkout-cart");
checkoutPaymentButton.setText("Checkout Payment");
// ================== handle checkout payment button ==================

// ================== container cart list button ==================
const containerPayclearButton = createElement("div");
containerPayclearButton.setClass("container-payment-clear-button");
// ================== container cart list button ==================

// ================== container payment ==================
const containerPayment = createElement("div");
containerPayment.setClass("container-payment");
// ================== container payment ==================

// ================== payment detail ==================
const paymentDetail = createElement("p");
paymentDetail.setText("Payment Details");
paymentDetail.setClass("container-payment-details");
// ================== payment detail ==================

// ================== total quantity ==================
const totalQuantity = createElement("p");
totalQuantity.setClass("container-payment-total-quantity");
totalQuantity.setText(
  `Total Quantity Products : ${cartItems.sumTotalQuantity()}`,
);
// ================== total quantity ==================

// ================== total price ==================
const totalPrice = createElement("p");
totalPrice.setClass("container-payment-total-price");
totalPrice.setText(
  `Total Price  x  Quantity(${cartItems.sumTotalQuantity()}) = ${formaterCurrency(cartItems.subTotalPrice(cartItems.items))}`,
);
// ================== total price ==================

// ================== sub total price ==================
const subTotalPrice = createElement("p");
subTotalPrice.setClass("container-payment-sub-total-price");
subTotalPrice.setText(
  `Total Payment = ${formaterCurrency(cartItems.subTotalPrice(cartItems.items))}`,
);
// ================== sub total price ==================

containerPayclearButton.element.appendChild(checkoutPaymentButton.element);
containerPayclearButton.element.appendChild(clearAllCartButton.element);

containerPayment.element.appendChild(paymentDetail.element);
containerPayment.element.appendChild(totalQuantity.element);
containerPayment.element.appendChild(totalPrice.element);
containerPayment.element.appendChild(subTotalPrice.element);
containerPayment.element.appendChild(containerPayclearButton.element);

containerCartCard.element.appendChild(containerPayment.element);
