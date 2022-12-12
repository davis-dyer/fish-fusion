const { mongerInventory } = require("./fishMonger.js")
const { boatInventory } = require("./fishingBoat.js")
const { filteredInventory, result } = require("./fishMonger.js")
const allFish = boatInventory();
const filterFish = filteredInventory(result);

const newArr = []

for (const fishFry of filterFish) {
    
}


/* const fishMenu = (pricePoint) => {
    const marketFish = []
    for (const market of allFish)
    if (market.price < pricePoint) {
        marketFish.push(market);
    }
    return marketFish;
}
 */

const answer = fishMenu(5);
//answer = fiftyInv(answer);

/* const elements = (num) => {
    const fishHTML = `
    <h1>Menu</h1>
    <article class='menu'>
        <h2>${num.species}</h2> `
    
    return fishHTML;
} */

//let htmlForUse = elements(answer);


console.log(answer);