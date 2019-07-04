/**
 * ******************** MAKE PAYMENT ****************************
 */
const {prompt} = require("inquirer")
function makepayment(price){
    console.log(`\nYou would be charged ${price} for the purchases`);

      const question = [{
          type:"confirm",
          name:"userSelect",
          message:'Do you want to proceed with payment?',
          default: true
      }];
      
      prompt(question).then(answers => {
        if(answers.userSelect){
            console.log("The amount ₦"+ price + " has been deducted from your account")
            console.log("Thank you for patronzing us!")
        }else{
        console.log("You cancelled your order")
        console.log("Feel free to make another order")
        }
      })

}

module.exports = makepayment;