// class Pizza
// global variables
let nameCustomer = document.getElementById("name");
let emailCustomer = document.getElementById("email");
let sizePizza = document.getElementById("quantity");
let deliveryItems = document.getElementById("delivery");
let btn = document.querySelector(".btn-danger");
let price = document.getElementsByClassName("price");
let crustPizza = document.getElementById('crust')
// console.log(price)

// globa variable with values from the input fields

class Pizza {
  constructor(
    customerName,
    customerEmail,
    pizzaSize,
    pizzaCrust,
    delivery = Boolean,
    price = 0
  ) {
    this.customerName = customerName;
    this.customerEmail = customerEmail;
    this.pizzaSize = pizzaSize;
    this.pizzaCrust = pizzaCrust;
    this.delivery = delivery;
    this.price = price;
  }
  getTotalPrice(crust, toppings, quantity) {
    if (this.pizzaSize == "small") {
      if (this.delivery == true) {
        return (this.price += crust + toppings + 300 + 200) * quantity;
      } else {
        return (this.price += crust + toppings + 300) * quantity;
      }
    } else if (this.pizzaSize == "medium") {
      if (this.delivery == true) {
        return (this.price += crust + toppings + 500 + 200) * quantity;
      } else {
        return (this.price += crust + toppings + 500) * quantity;
      }
    } else {
      if (this.delivery == true) {
        return (this.price += crust + toppings + 800 + 200) * quantity;
      } else {
        return (this.price += crust + toppings + 800) * quantity;
      }
    }
  }
  quantityChange(event) {
    let inputNum = document.getElementById("numQuantity");
    let input = inputNum.value;
    input = event.target;
    // event.target
    if (isNaN(input) || input <= 0) {
      input = 1;
    }
    this.getTotalPrice();
  }
}
btn.addEventListener("click", function () {
  let name = nameCustomer.value;
  let email = emailCustomer.value;
  let size = sizePizza.value;
  let crust = crustPizza.value
  let deliveryitem = deliveryItems.value;
  let pizza = new Pizza(name, email, size, crust ,deliveryitem);
  console.log(`Customer Name: ${pizza.customerName}
  customer Email: ${pizza.customerEmail}
  Pizza Size: ${pizza.pizzaSize}
  Pizza Crust: ${pizza.pizzaCrust}
  Total Price: ${pizza.getTotalPrice(200, 100, 2)}`);
});
