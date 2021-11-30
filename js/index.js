// class Pizza
// global variables
let nameCustomer = document.getElementById("name");
let emailCustomer = document.getElementById("email");
let sizePizza = document.getElementById("quantity");
let deliveryItems = document.getElementById("delivery");
let btn = document.querySelector(".btn-danger");
let price = document.getElementsByClassName("price");
let crustPizza = document.getElementById("crust");
let numQuantityItems = document.getElementById('numQuantity')
let display = document.getElementById("confirm")
let totalPricePizza = document.getElementById('totalPrice')
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
        return (this.price += crust + toppings * quantity + 300 + 200);
      } else {
        return (this.price += crust + toppings + 300 )* quantity;
      }
    } else if (this.pizzaSize == "medium") {
      if (this.delivery == true) {
        return (this.price += crust + toppings + 500 + 200 ) * quantity;
      } else {
        return (this.price += crust + toppings + 500 ) * quantity;
      }
    } else {
      if (this.delivery == true) {
        return (this.price += crust + toppings + 800 + 200) * quantity;
      } else {
        return (this.price += crust + toppings + 800) * quantity;
      }
    }
  }
  // quantityChange(event) {
  //   let inputNum = document.getElementById("numQuantity");
  //   let input = inputNum.value;
  //   input = event.target;
  //   console.log(input)
  //   // event.target
  //   if (isNaN(input) || input <= 0) {
  //     input = 1;
  //   }
  //   this.getTotalPrice();
  // }
}
btn.addEventListener("click", function () {
  let name = nameCustomer.value;
  let email = emailCustomer.value;
  let size = sizePizza.value;
  let crust = crustPizza.value;
  let deliveryitem = deliveryItems.checked;
  let numQuantityItem = numQuantityItems.value

  console.log(numQuantityItem)
  // console.log(display)
  let pizza = new Pizza(name, email, size, crust, deliveryitem);
  // output
  console.log(`Customer Name: ${pizza.customerName}
  customer Email: ${pizza.customerEmail}
  Pizza Size: ${pizza.pizzaSize}
  Pizza Crust: ${pizza.pizzaCrust}
  Total Price: ${pizza.getTotalPrice(200, 100, numQuantityItem)}
  Delivery: ${deliveryitem}`);
 
  display.innerHTML = `<div class="modal" id="confimOrderModal">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title text-danger" id="modal-header">Confirm Your Order</h4>
          </div>
          <div class="modal-body">
              <div class="row d-flex justify-content-center align-items-center mt-3">
                  <div class="col-md-4">
                      <h5><span style="font-weight: bold;">Customer Name:</span> ${pizza.customerName}</h5>
                  </div>
              </div>
              <div class="row d-flex justify-content-center align-items-center mt-3">
                  <div class="col-md-4">
                      <h5> <span style="font-weight: bold;">Customer Email:</span> ${pizza.customerEmail} </h4>
                  </div>
              </div>
              <div class="row d-flex justify-content-center align-items-center mt-3">
                  <div class="col-md-4">
                      <h5><span  style="font-weight: bold;">Size of the Pizza:</span>${pizza.pizzaSize}</h5>
                  </div>
              </div>
              <div class="row d-flex justify-content-center align-items-center mt-3">
                  <div class="col-md-4">
                      <h5><span  style="font-weight: bold;">Pizza Crust:</span>${pizza.pizzaCrust}</h5>
                  </div>
              </div>
              <div class="row d-flex justify-content-center align-items-center mt-3">
                  <div class="col-md-4">
                      <h5><span  style="font-weight: bold;">Delivery:</span>${deliveryitem}</h5>
                  </div>
              </div>
              <div class="row d-flex justify-content-center align-items-center mt-3">
                  <div class="col-md-4">
                      <h4><span style="font-weight: bold; color: brown;">Total price:</span>Ksh ${pizza.getTotalPrice(200, 100, numQuantityItem)}</h4>
                  </div>
              </div>

              <div class="modal-buttons d-flex justify-content-center align-items-center mt-3" id="confirm-buttons">
                  <button type="submit" class="btn btn-success button-confirm" id="confirmOrder">Confirm</button>
                  <button type="submit" class="btn btn-danger" data-dismiss="modal">Cancel</button>
              </div>
          </div>
      </div>
  </div>
</div>`
// totalPricePizza.innerHTML = pizza.getTotalPrice(200, 100, numQuantityItem)
  // console.log(pizza.quantityChange(numQuantityItem))
});

$(document).ready(function(){
  let orderPizza = new Pizza(name, email, size, crust, deliveryitem)
  $('#confirmOrder').click(function(){
    alert(`Pizza Size: ${orderPizza.size}
    Pizza Crust: ${orderPizza.crust}
    Delivery: ${orderPizza.deliveryitem}
    Total Price: ${orderPizza.getTotalPrice(200, 100, numQuantityItem)}
    `)
  })
})

