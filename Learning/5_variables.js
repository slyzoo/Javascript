let x; // declaration
x = 15; // assignment

console.log(x);

let y = 14; // both

// int
let age = 18;

console.log(age);
console.log(typeof age);
console.log(`you are ${age} years old`);
document.getElementById("age").textContent = ` your age is ${age}`;

// float
let price = 12.99;

console.log(price);
console.log(typeof price);
console.log(`that can of soup is $${price}`);
document.getElementById("price").textContent = `that can of soup is $${price}`;

// string
let firstname = "sly";
let lastname = "zoo";

console.log(firstname);
console.log(typeof firstname);
console.log(`you are ${firstname}${lastname}`);
document.getElementById("name").textContent = `you are ${firstname}${lastname}`;

// boolean
let online = true;

console.log(online);
console.log(typeof online);
console.log(`you are online? : ${online}`);
document.getElementById("online").textContent = `you are online? : ${online}`;
