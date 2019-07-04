/**
 * ******************** DISPLAY PRODUCTS ****************************
 */

const store = require ("./store");

var Table = require('cli-table');

var table = new Table({
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
           , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
           , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
           , 'right': '║' , 'right-mid': '╢' , 'middle': '│' },
    head: ["s/n", "Product", "Price"],
    colWidths:[5,30,15]
  });

for (let i = 0; i < store.length; i++) {
    table.push(
        [i + 1, store[i].name, store[i].price]
    );
}

console.log(table.toString());