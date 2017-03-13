// Practice assignment from Chapter 1 of YDKJS - Up and Going

/* Everything in this page was created by following the tutorials contained in the 
"You Don't Know JS" book series, written by Kyle Simpson.
The current github link to this book series is contained here:
https://github.com/getify/You-Dont-Know-JS */

// The following program is used to calculate the total cost of a phone purchase
// Note: The logic behind this program doesn't make a ton of sense, but it works functionally
// I may come back and modify this program further, but want to continue with the lessons

// Function to properly format the output of a price
function printPrice(price) {
	price = price + 0.0041; // adding 0.0041 guarantees a round up instead of round down (currency reasons)
	price = price.toFixed(2);
	console.log("$" + price);
}

// Loop to purchase phones
function buyPhones() {
	subtotal = 0.00;
	while (subtotal < (bankAcctBal - phonePrice)) {
		subtotal = subtotal + phonePrice;
		//console.log("internal subtotal" + subtotal);
	}
	return subtotal;
}

// Loop to purchase accessories
function buyAccessories(subtotal) {
	while (subtotal < (spendThreshold - ACC_PRICE)) {
		subtotal = subtotal + ACC_PRICE;
	}
	return subtotal;
}

// Calculate the tax
function calculateTax(amt) {
	amt = amt + (amt * TAX_RATE);
	return amt;
}

var TAX_RATE = 0.08;
var ACC_PRICE = 9.99;
var phonePrice = 0;
var bankAcctBal = 0;
var spendThreshold = 0;
var total = 0;

bankAcctBal = prompt("What is the current balance in your bank account?");
phonePrice = prompt("What is the cost of the phone you will be buying?");
bankAcctBal = Number(bankAcctBal);
phonePrice = Number(phonePrice);

if (bankAcctBal <= 50) {
	spendThreshold = 0;
} else {
	spendThreshold = (bankAcctBal - 50);
}

total = buyPhones();
total = buyAccessories(total);
total = calculateTax(total);

console.log("Your total purchase price is: ");
printPrice(total);

console.log("Can I afford this?");
if (total <= bankAcctBal) {
	console.log("Yes, you can afford this purchase.");
	console.log("Balance in account after purchase: ")
	bankAcctBal = bankAcctBal - total;
	printPrice(bankAcctBal);
} else {
	console.log("No, you don't have enough money.");
}

// the end