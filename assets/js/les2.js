console.log("hello");
const firstName = "Leon";
const lastName = "de Kraker";
let age = 20;

console.log(`Hallo, ik ben ${firstName} ${lastName} en ik ben ${age} jaar oud`);

const priceOfAnApple = "0.59";
const numberOfApples = 200;

console.log("Toaalprijs is: " + numberOfApples * priceOfAnApple);

let hzMessage = "Please visit the HZ University of applied science";
let newHzMessage = hzMessage.replace("applied", "mad");
console.log(newHzMessage);

// eindopdracht 1
let num = 24;
if (num % 2 == 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// eindopdracht 2
let string = "programming is not so cool";
newString = string.replace(" not", "");
console.log(newString);

// eindopdracht 3
let number = 1400;
let stringOpdrDrie = "ik woon in naboo";

if (number == stringOpdrDrie) {
    console.log("Deze statement heeft geen nut want een nummer zal nooit hetzelfde zijn als een string");
}
else {
    console.log("Dus het wordt de else");
}