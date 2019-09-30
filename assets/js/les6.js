const shoppingList = [];
shoppingList[0] = "Tandenborstel";
shoppingList[1] = "Deodorant";
shoppingList[2] = "Bakmeel";
shoppingList[3] = "Wortels";
shoppingList[4] = "Tandpasta";
shoppingList[5] = "Krop sla";
shoppingList[6] = "Magga";
shoppingList[7] = "Croky Chips";
shoppingList[8] = "WC papier";
shoppingList[9] = "Shampoo";
shoppingList.push("push test");
shoppingList.pop();


const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];

// Calculate the total price
function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < productPrices.length; i++) {
        totalPrice += productPrices[i];
    }
    console.log(totalPrice);
}

// Calculate the average price
function calculateAveragePrice() {
    let totalPrice = 0;
    for (let i = 0; i < productPrices.length; i++) {
        totalPrice += productPrices[i];
    }
    let averagePrice = totalPrice / productPrices.length;
    console.log(averagePrice);
}

// get the highest value out of the array
function getTheHighestValue() {
    let currentMaxValue = 0;
    for (let i = 0; i < productPrices.length; i++) {
        if (productPrices[i] > currentMaxValue) {
            currentMaxValue = productPrices[i];
        }
    }
    console.log(currentMaxValue);
}

// calculateTotalPrice();
// calculateAveragePrice();
// getTheHighestValue();

//EINDOPDRACHT
//opdr 1

// return random element
function returnRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// opdr 2 
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

allMyRecords.forEach(element => {
    for (let index = 0; index < element.length; index++) {
        console.log(element[index]);
    }
});

// opdr 3
// filter is i.i.g. fijner omdat het een stuk minder code is en makkelijkers toepasbaar indien je het begrijpt
let filteredPrices = productPrices.filter(function (number) {
    return number < 4;
});

console.log(filteredPrices);
console.log(returnRandomElement(shoppingList));