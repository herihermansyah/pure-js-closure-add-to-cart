import createElement from "../utils/createElement.js";

const main = document.getElementById("main");

const mockProduct = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: `Product ${index + 1}`,
  description: `Description for Product ${index + 1}`,
  image: `https://via.placeholder.com/150?text=Product+${index + 1}`,
}));

const wrapperCard = createElement("div");
wrapperCard.setClass("wrapper-card");

main.appendChild(wrapperCard.element);

mockProduct.forEach((product) => {
  // ========== product card ============
  const productCard = createElement("div");
  productCard.setClass("product-card");
  // ============ product image ============
  const productImage = createElement("img");
  productImage.setClass("product-image");
  productImage.setAttribute("src", `${product.image}`);
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
});

export { wrapperCard };
