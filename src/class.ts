interface User {
  name: string;
}
interface Product {
  id: string;
  price: number;
}

class Cart {
  constructor(protected user: User, private store: object = {}) {}
  put(id: string, product: Product) {
    this.user;
    // this.store[id] = product;
  }
  private get(id: string) {
    // return this.store[id];
  }
}

class Promotion extends Cart {
  addPro() {
    this.user;
  }
}

const cartJohn = new Cart({ name: "john" });
const cartJay = new Cart({ name: "jay" });
