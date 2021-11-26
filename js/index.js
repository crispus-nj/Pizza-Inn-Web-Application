// class Pizza
class Pizza {
  constructor(customerName, pizzaSize, delivery = Boolean, price = 0) {
    this.customerName = customerName;
    this.pizzaSize = pizzaSize;
    this.delivery = delivery;
    this.price = price;
  }
  getTotalPrice(crust, toppings, quantity){

  }
}

let pizza = new Pizza("Crispus Njenga", "small", true)
console.log(`Customer Name: ${pizza.customerName}
Pizza Size: ${pizza.pizzaSize}
Total Price: ${pizza.getTotalPrice(200, 100, 2)}`)
