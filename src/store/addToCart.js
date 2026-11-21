export class CartManage {
  constructor() {
    const saved = localStorage.getItem("cart");
    this.items = saved ? JSON.parse(saved) : [];
  }

  addToCart(product) {
    const isExisting = this.items.find((item) => item.id === product.id);

    if (isExisting) {
      isExisting.quantity += 1;
    } else {
      this.items.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    this.save();
  }

  save() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  }
}

export const cartItems = new CartManage();
