var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price =  Math.floor(Math.random() * Math.floor(100))
  var newitem = {itemName: item, itemPrice: price}
  cart.push(newitem)
  return `${newitem.itemName} has been added to your cart.`
}

function viewCart() {
  var newcart = ""
  for (let i = 0; i < cart.length; i++) {
    newcart = newcart + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    if (i === cart.length - 1) {
      newcart = newcart + "and" + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  } if (cart.length > 0) {
    return `In your cart, you have ${newcart.slice(0, -2)}.`
  } else if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
