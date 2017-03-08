// Practice assignment from Chapter 1 of YDKJS - Up and Going

/* Everything in this page was created by following the tutorials contained in the 
"You Don't Know JS" book series, written by Kyle Simpson.
The current github link to this book series is contained here:
https://github.com/getify/You-Dont-Know-JS */


// The following program is used to calculate the total cost of a phone purchase

//Calculate the total price of a phone purchase
//Keep purchasing phones (as a loop) until you run out of money in your bank account
//Buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
//After caculating purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
//Check amount against bank account balance to see if you can afford it.

// Declare constants
var TAX_RATE;
var PHONE_PRICE;
var ACC_PRICE;
var SPEND_THRESHOLD;

// Declare variables
var bankAcctBal;

// Function to properly format the price for display
function printPrice(price) {
	price = price + 0.0041; // adding 0.0041 guarantees a round up instead of round down (currency)
	//console.log(price); // debug
	price = price.toFixed(2); // fix number decimal point, convert to string
	console.log("$" + price);
}