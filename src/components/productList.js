import products from "../service/productData.js";
import renderProductCard from "./ui/productCard.js";

// ================== product list ==================
// render products list use foreach method
// call products data from servivce folder

products.forEach((product) => renderProductCard(product));
