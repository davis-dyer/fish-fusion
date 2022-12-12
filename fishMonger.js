//This module must import and invoke the function that is exported by the fishing boat module.
const { boatInventory } = require("./fishingBoat.js")
const getFish = boatInventory()
const boughtFish = [];

const filteredInventory = () => {
    for (const fish of getFish)
    if (fish.price < 7.50 && fish.amount > 10) {
        boughtFish.push(fish) 
    }
    return boughtFish;

}


const mongerInventory = (invObject) => {
    for (const fresh of invObject) {
        fresh.amount = 10;
        }
    return invObject;
}


    


let result = filteredInventory();
mongerInventory(result);

console.log(result);

module.exports = { mongerInventory }
module.exports = { filteredInventory }