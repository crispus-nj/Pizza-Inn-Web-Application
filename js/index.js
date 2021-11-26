// class Pizza
class Pizza {
  constructor(customerName, pizzaSize, delivery = Boolean, price = 0) {
    this.customerName = customerName;
    this.pizzaSize = pizzaSize;
    this.delivery = delivery;
    this.price = price;
  }
}
