import createElement from "../../utils/createElement.js";
import { cartItems } from "../../store/addToCart.js";
import { userAction } from "./userAction.js";
import formaterCurrency from "../../libs/formatCurrency.js";
import calculateDiscountPercentage from "../../libs/discountPercentage.js";

// ================== product card ==================
// create entire element for product
// function renderProductCard container for entire element
// pairing entire element inside wrapperCard
// and pairing wrapperCard inside tag main to render function renderProductCard

const main = document.getElementById("main");

// ================== container product Card ==================
// container product card to style all of the card such as style
// either display grid or display flex
const containerCard = createElement("div");
containerCard.setClass("container-list-products");
// ================== container product Card ==================

main.appendChild(containerCard.element);

// ================== function renderProductCard ==================
// renderProductCard to contains entire elements to display on the browser
export default function renderProductCard(product) {
  // ================== container product ==================
  const productCard = createElement("div");
  productCard.setClass("container-product");
  // ================== container product ==================

  // ================== product image ==================
  const productImage = createElement("img");
  productImage.setClass("container-product-image");
  productImage.setAttribute("src", `${product.thumbnail}`);
  productImage.setAttribute("alt", "Product Image");
  productImage.setAttribute("width", "200");
  productImage.setAttribute("height", "200");
  // ================== product image ==================

  // ================== product title ==================
  const productTitle = createElement("h3");
  productTitle.setClass("container-product-title");
  productTitle.setText(`${product.title}`);
  // ================== product title ==================

  // ================== product description ==================
  const productDescription = createElement("p");
  productDescription.setClass("container-product-description");
  productDescription.setText(`${product.description}`);
  // ================== product description ==================

  // ================== product price ==================
  const productPrice = createElement("div");
  productPrice.setClass("container-product-price");

  const productRealPrice = createElement("span");
  productRealPrice.setClass("container-product-real-price");
  productRealPrice.setText(`${formaterCurrency(product.price)}`);

  const productDiscountedPrice = createElement("span");
  productDiscountedPrice.setClass("container-product-discounted-price");
  productDiscountedPrice.setText(
    `${formaterCurrency(calculateDiscountPercentage(product.price, product.discountPercentage))}`,
  );

  const discountBadge = createElement("span");
  discountBadge.setClass("container-prodcut-discount-badge");
  discountBadge.setText(`OFF ${product.discountPercentage}%`);

  productPrice.element.appendChild(discountBadge.element);
  productPrice.element.appendChild(productRealPrice.element);
  productPrice.element.appendChild(productDiscountedPrice.element);
  // ================== product price ==================

  // ==================  add to cart button ==================
  const addToCartButton = createElement("button");
  addToCartButton.setText("Add to Cart");
  addToCartButton.setClass("container-product-addtocart");

  addToCartButton.setEvent("click", () => {
    cartItems.addToCart(product);
    userAction.element.innerHTML = `
      <p class="cart-text">Cart</p>
      <p class="cart-length">${cartItems.items.length}</p>
    `;
  });
  // ==================  add to cart button ==================

  // ================== pairing entire elements ==================
  containerCard.element.appendChild(productCard.element);
  productCard.element.appendChild(productImage.element);
  productCard.element.appendChild(productTitle.element);
  productCard.element.appendChild(productDescription.element);
  productCard.element.appendChild(productPrice.element);
  productCard.element.appendChild(addToCartButton.element);
}
// ================== function renderProductCard ==================
