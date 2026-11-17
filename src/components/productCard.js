import createElement from "../utils/createElement.js";
import products from "../service/productData.js";

const main = document.getElementById("main");

const wrapperCard = createElement("div");
wrapperCard.setClass("wrapper-card");

main.appendChild(wrapperCard.element);

function renderProductCard(product) {
  // ========== product card ============
  const productCard = createElement("div");
  productCard.setClass("product-card");

  // ============ product image ============
  const productImage = createElement("img");
  productImage.setClass("product-image");
  productImage.setAttribute("src", `${product.thumbnail}`);
  productImage.setAttribute("alt", "Product Image");
  productImage.setAttribute("width", "200");
  productImage.setAttribute("height", "200");

  // ============ product title ============
  const productTitle = createElement("h3");
  productTitle.setText(`${product.title}`);

  // ============ product description ============
  const productDescription = createElement("p");
  productDescription.setText(`${product.description}`);

  // ============  product button ===========

  const productButton = createElement("button");
  productButton.setText("Add to Cart");

  //   ============ pairing ============
  wrapperCard.element.appendChild(productCard.element);
  productCard.element.appendChild(productImage.element);
  productCard.element.appendChild(productTitle.element);
  productCard.element.appendChild(productDescription.element);
  productCard.element.appendChild(productButton.element);
}

products.forEach((product) => {
  renderProductCard(product);
});

export { wrapperCard };
