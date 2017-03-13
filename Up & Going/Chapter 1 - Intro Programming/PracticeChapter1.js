// Practice assignment from Chapter 1 of YDKJS - Up and Going

/* Everything in this page was created by following the tutorials contained in the 
"You Don't Know JS" book series, written by Kyle Simpson.
The current github link to this book series is contained here:
https://github.com/getify/You-Dont-Know-JS */

// The following program is used to calculate the total cost of a phone purchase
// I slightly modified the instructions to make more sense financially

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

//bankAcctBal = 406.77;
//phonePrice = 107.00;

bankAcctBal = prompt("What is the current balance in your bank account?");
phonePrice = prompt("What is the cost of the phone you will be buying?");
console.log(bankAcctBal);
Number(bankAcctBal);
console.log(bankAcctBal);
Number(phonePrice);
console.log(phonePrice);

spendThreshold = (bankAcctBal - 50);
console.log("sector 3" + spendThreshold);

console.log("total before functions " + total);
total = buyPhones();
console.log("total #1 " + total);
total = buyAccessories(total);
console.log("total #2 " + total);
total = calculateTax(total);
console.log("total #3 " + total);

console.log("Your total purchase price is: ");
console.log(total);
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