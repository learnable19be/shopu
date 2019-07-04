const Table = require('cli-table');
const table = new Table({
  head: ['Name', 'price', 'quantity', 'total'],
  colWidths: [30, 10, 10, 10]
});

cart = [];
total = 0;

function displayCart() {
  cart.forEach(item => {
    table.push([item.name, item.price, item.quantity, item.totalPrice]);
  });

  console.log('This is the summary of you cart');
  console.log(table.toString());
  console.log(`And you total price is ₦${total}`);
}

function add(order) {
  const item = {
    name: order.name,
    quantity: order.quantity,
    price: order.price,
    totalPrice: order.price * order.quantity
  };
  cart.push(item);

  total += item.totalPrice;
}

module.exports = {
  displayCart,
  add
};
