cart = [];

function displayCart(){
    console.log(cart)
}


function add(order){
    cart.push(
        {"item": order.name, 
        "quantity": 2, 
        "price": order.price, 
        "totalPrice": order.price * order.quantity})
}

module.exports = {
    displayCart, add
}