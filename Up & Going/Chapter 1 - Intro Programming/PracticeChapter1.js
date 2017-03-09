// Practice assignment from Chapter 1 of YDKJS - Up and Going

/* Everything in this page was created by following the tutorials contained in the 
"You Don't Know JS" book series, written by Kyle Simpson.
The current github link to this book series is contained here:
https://github.com/getify/You-Dont-Know-JS */


// The following program is used to calculate the total cost of a phone purchase

//Calculate the total price of a phone purchase

//Buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
//After caculating purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
//Check amount against bank account balance to see if you can afford it.
//Incorporate input into this program, perhaps with prompt(..)

// Declare constants
var TAX_RATE = 0.08;
var ACC_PRICE = 9.99;
var SPEND_THRESHOLD = 350.00;

// Declare variables
var phonePrice = 0;
var bankAcctBal = 0;

// Function to properly format the output of a price
function printPrice(price) {
	price = price + 0.0041; // adding 0.0041 guarantees a round up instead of round down (currency reasons)
	price = price.toFixed(2);
	console.log("$" + price);
}

//Keep purchasing phones (as a loop) until you run out of money in your bank account
phonePrice = 99.99
bankAcctBal = 350.00
function buyPhones() {
	var subtotal = 0;
	while (bal < bankAcctBal) {
		subtotal = subtotal + phonePrice;
	}
	return subtotal;
}

var subtotal = 0;
subtotal = buyPhones;
console.log(subtotal);
// Function to purchase phones until out of money in bank account

bankAcctBal = prompt("What is the current balance in your bank account?");

phonePrice = prompt("What is the cost of the phone you will be buying?");