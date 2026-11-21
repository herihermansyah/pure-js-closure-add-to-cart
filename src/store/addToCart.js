export class CartManage {
  constructor() {
    this.items = [];
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
  }
}

export const cartItems = new CartManage();
