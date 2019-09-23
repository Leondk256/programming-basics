const currentAction = "booleans";

// als calculating
if (currentAction == "calculating") {
    // optellen - delen - aftrekken - vermenigvuldigen
    let x = 5;
    let y = 2;
    console.log("Optellen: ", x + y);

    console.log("Delen: ", x / y);

    console.log("Aftrekken: ", x - y);

    console.log("Vermenigvuldigen", x * y);
}

// als strings
if (currentAction == "strings") {
    // uppercase - match - length - substring - charat
    let string = "test string";
    let string2 = "another test string";
    console.log("Uppercase: ", string.toUpperCase());

    console.log("Match: ", string.match(string2));

    console.log("Substring: ", string.substr(0, 3))

    console.log("charat: ", string2.charAt(8));
}

// als booleans
if (currentAction == "booleans") {
    // check of bepaald cijfer genoeg is
    let number = 5;
    if (number > 0) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}

// BMI berekening
let weight = 75;
let length = 1.8;

let bmi = weight / (length * length);

if (bmi < 18.5) {
    console.log("Ondergewicht");
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("normaal gewicht");
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overgewicht");
}
else if (bmi >= 30) {
    console.log("Obesitas");
}

// eindopdracht 1
let grade = 7.5;
if (grade < 6) {
    console.log("Onvoldoende");
}
else if (grade > 6 && grade < 7) {
    console.log("Voldoende");
}
else if (grade > 7 && grade < 9) {
    console.log("Goed");
}
else if (grade > 9) {
    console.log("Uitmuntend");
}
else {
    console.log("Onbekend cijfer");
}

// eindopdracht 2
switch (true) {
    case (grade < 6):
        console.log("Onvoldoende");
        break;
    case (grade > 6 && grade < 7):
        console.log("Voldoende");
        break;
    case (grade > 7 && grade < 9):
        console.log("Goed");
        break;
    case (grade > 9):
        console.log("Uitmuntend");
        break;
}

// eindopdracht 3
let = purchasedBook = true;
let = job = "teacher";
let = inTrain = false;

if (purchasedBook == true && job == "teacher" && inTrain == false) {
    console.log("finally i can enjoy my book!");
}
else if (purchasedBook == false && job == "teacher" && inTrain == false) {
    console.log("I'm a teacher without a book and not in the train!");
}
else if (purchasedBook == false && job == "teacher" && inTrain == true) {
    console.log("I'm a teacher riding the train!");
}
else if (purchasedBook == true && job == "teacher" && inTrain == true) {
    console.log("I'm a teacher reading a book in the train");
}
else {
    console.log("I'm neither a teacher, nor am I riding the train and I don't have any books with me either!");
}