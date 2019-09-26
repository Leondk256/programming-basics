function giveMeSomeNiceName(gender) {
    let name = "";
    if (gender == "male") {
        name = "Rob";
    }
    else if (gender == "female") {
        name = "Tineke";
    }
    return name;
}

let newName = giveMeSomeNiceName("male");
console.log(newName);

function pig(numberOfPigs) {
    let pigString = "";
    for (i = 1; i <= numberOfPigs; i++) {
        pigString += "🐷";
    }
    console.log(`${pigString}knor`);
}

pig(5);

function factorial(num) {
    let num1 = 1;
    for (let i = 0; i <= num; i++) {
        num1 = num1 * (i + 1);
    }
    return num1;
}

console.log(factorial(5));

// EINDOPDRACHT
// opdr 1
console.log("--------------------------");
function fibonacci() {
    let x = 0;
    let y = 1;
    let result = 0;
    while (result < 100) {
        result = x + y;
        x = y;
        y = result;
        console.log(result)
    }
}

fibonacci();

//opdr 2
console.log("---------------------");
function yearCountdown(year) {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
        if (i === 0) {
            console.log(`Happy ${year}!`);
        }
    }
}
yearCountdown(2050);

//opdr 3

//hoisting declaratie
console.log(fooHoist()); // Alerts 5. Declarations are loaded before any code can run.
function fooHoist() { return 5; }

//no hoisting expression
console.log(fooNoHoist()); // ERROR! foo wasn't loaded yet
var fooNoHoist = function () { return 5; }