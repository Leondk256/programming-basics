// WHILE LOOP
// opdr 1
let i = 1;
while (i < 11) {
    console.log(i);
    i++;
}

//opdr 2
let tweedeOpdrString = "Het is maandag";
let lengthOpdrString = tweedeOpdrString.length;

while (lengthOpdrString >= 0) {
    console.log(tweedeOpdrString.charAt(lengthOpdrString));
    lengthOpdrString--;
}

// opdr 3
let stringOpdrDrie = "Geweldig";
let lengthOpdrDrie = stringOpdrDrie.length;

var newString = "";
while (lengthOpdrDrie >= 0) {
    newString += stringOpdrDrie.charAt(lengthOpdrDrie);
    lengthOpdrDrie--;
}
console.log(newString);

// opdr 4

let opdrVierString = "racecar";
let opdrVierStringLength = opdrVierString.length;

let matchStrings = "";
while (opdrVierStringLength >= 0) {
    matchStrings += opdrVierString.charAt(opdrVierStringLength);
    opdrVierStringLength--;
}

if (matchStrings == opdrVierString) {
    console.log("palindrome");
}
else {
    console.log("geen palindrome");
}

// FOR LOOP
// opdr 1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// opdr 2
let sentence = "Het is maandag!";
for (let j = 0; j < sentence.length; j++) {
    console.log(sentence.charAt(j));
}

// opdr 3
for (let k = 0; k <= 25; k++) {
    if (k % 3 == 0) {
        console.log(k + " is dividable");
    }
    else {
        console.log(k + " is not dividable");
    }
}

// EINDOPDRACHT
// opdr 1

console.log("---------------------------");

let l = 30;
while (l >= 0) {
    if (l % 4 == 0) {
        console.log(l + " is dividable");
    }
    else {
        console.log(l + " is not dividable");
    }
    l--;
}

// opdr 2
let x = 0;
let y = 1;
let result = 0;
while (result < 100) {
    result = x + y;
    x = y;
    y = result;
    console.log(result)
}

// opdr 3
let numbers = [2, 4, 8, 9, 12, 13];
let total = 0;
for (let m = 0; m < numbers.length; m++) {
    total += numbers[m];
    console.log(`totaal is ${total}`);
}
