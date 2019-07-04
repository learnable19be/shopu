/**
 * ******************** DISPLAY PRODUCTS ****************************
 */

const store = require ("./store");

let Table = require('cli-table');

function displayProducts() {
    console.log("Welcome to Shọpụ \n\nHere's what we have for now\n");
    
    var table = new Table({
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
        , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
        , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
        , 'right': '║' , 'right-mid': '╢' , 'middle': '│' },
        head: ["Product", "Price"],
        colWidths:[30,15]
      });
      
    for (let i = 0; i < store.length; i++) {
        table.push(
            [store[i].name, store[i].price]
        );
    }
    
    console.log(table.toString());
}

module.exports = displayProducts;