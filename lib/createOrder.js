/**
 * ******************** CREATE AN ORDER ****************************
 */
const { prompt } = require('inquirer');
const store = require('./store.js');
const Cart = require('./Cart');

const storePlain = store.map(item => `${item.name} (${item.price})`);

//questions to be asked with inquirer
const questions = [
  {
    type: 'list',
    name: 'name',
    message: 'Select Item you want to purchase',
    choices: storePlain
  },
  {
    type: 'number',
    name: 'quantity',
    message: 'Choose quantity of the item you want to purchase'
  },
  {
    type: 'confirm',
    name: 'performAnotherTransaction',
    message: 'Do you want to purchase another item?',
    default: false
  }
];

/**
 * Creates an order an adds it to the cart
 *
 */
function createOrder() {
  prompt(questions).then(answers => {
    const [_, name, price] = /(.*)\s\(\₦(.*)\)/.exec(answers.name);
    const order = {
      name,
      price: Number(price.replace(',', '')),
      quantity: Number(answers.quantity)
    };
    Cart.add(order);
    if (answers.performAnotherTransaction) {
      //creates another order if user chooses to purchase another item
      createOrder();
    } else {
      //make payment
      Cart.displayCart();
    }
  });
}

module.exports = createOrder;
