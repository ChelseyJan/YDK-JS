// Everything in this page was created by following the tutorials contained in the 
// "You Don't Know JS" book series, written by Kyle Simpson.
// The current github link to this book series is contained here:
// https://github.com/getify/You-Dont-Know-JS
// Don't try to run this file it is only for practice
// Each example is divided by a comment.
// Run lines of code all at once when between a *** comment.

// ***

a = 21;

b = a * 2;

console.log(b);

// *** Difference between console.log and alert

a = 21;

b = a * 2;

alert(b);

// *** Using basic input in JS

age = prompt("Please tell me your age:" );

console.log(age);

// *** Variable Creation

var a = 20;

a = a + 1;
a = a * 2;

console.log (a);

// *** Coercion: converting string to a number

var a = "42"; 
var b = Number(a);

console.log (a);
console.log (b);

// *** Changing a number to a string

var amount = 99.99;

amount = amount * 2;

console.log(amount);

amount = "$" + String(amount);

console.log(amount);

//

var TAX_RATE = 0.08; // 8% sales tax

var amount = 99.99;

amount = amount * 2;

amount = amount + (amount * TAX_RATE);

console.log (amount); // 215.9784
console.log (amount.toFixed(2)); // "215.98"

// *** as of ES6:
const TAX_RATE = 0.08; // This isn't really working properly on my firefox console, will use var for now

var amount = 99.99;

console.log(TAX_RATE);

// ***

var amount = 99.99;

// a general block - not normally seen in js

{
	amount = amount * 2;
	console.log(amount);
}

// *** if statement - blocks

var amount = 99.99;

// is amount big enough?
if (amount > 10) {		// <-- block attached to 'if'
amount = amount * 2;
console.log (amount); // 199.98
}

// *** else clause

var accessory_price = 9.99;
var bank_balance = 302.13;
var amount = 99.99;

amount = amount * 2;

// can we afford the extra purchase?

if (amount < bank_balance) {
	console.log ("I'll take the accessory!");
	amount = amount + accessory_price;
}

// otherwise:
else {
	console.log("No, thanks.");
}

// *** two basics kinds of loops

numOfCustomers = 7;

while (numOfCustomers > 0) {
	console.log("How may I help you?");
	//help the customer...
	numOfCustomers = numOfCustomers - 1;
}

// *** versus:

numOfCustomers = 7;

do {
	console.log ("How may I help you?");
		//help the customer...
	numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);

// *** breaking a loop with a break (not really a great practice to start participating in)

var i = 0;

// a 'while...true' loop would run forever, right?

while (true) {
	// stop the loop?
	if ((i <= 9) === false) {
		break;
	}
	
	console.log (i);
	i = i + 1;
}

// *** OH look here's a for loop:

for (var i = 9; i <= 9; i = i + 1) {
	console.log(i);
}
// NOTE: the third expression, i = i + 1 doesn't evaluate until the statement has run
// Basically it's the last step before hitting "for" again.

// *** We're at functions now

function printAmount() {
	console.log(amount.toFixed(2)); // this function has no arguments
}									 // and sets the amount to a 2 decimal place string

var amount = 99.99;

printAmount(); // "99.99"

amount = amount * 2;

printAmount(); // "199.98"

// *** More fun with functions

function printAmount(amt) {
	console.log(amt.toFixed(2));
}

function formatAmount() {
	return "$" + amount.toFixed(2);
}

var amount = 99.99;

printAmount(amount * 2);

amount = formatAmount();
console.log(amount);

// *** Using functions even when only using in program one time

var TAX_RATE = 0.08;

function calculateFinalPurchaseAmount (amt) {
	// calculate the new amount with the tax
	amt = amt + (amt * TAX_RATE);
	
	// return the new amount
	return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount(amount);

console.log(amount.toFixed(2));

// *** Examples of lexical scope using functions

function one() {
	// this 'a' only belongs to the 'one()' function
	var a = 1;
	console.log(a);
}

function two() {
	// this 'a' only belongs to the 'two()' function
	var a = 2;
	console.log(a);
}

one();
two();

// *** Nested scopes using functions

function outer () { // remember, this is all the function declaration, it's not actually run until the end
	var a = 1;
	
	function inner () {
		var b = 2;
		
		// we can access both 'a' and 'b' here
		console.log (a + b); //3
	}
	
	inner();
	
	// we can only access 'a' here
	console.log(a); //1
}

outer (); // now we run the function

// *** This is the end of chapter 1. Now time for the assignment.