function sortDrinkByPrice(drinks){
    const sorted = drinks.sort(function(a,b){
        return a.price - b.price
    });
    return sorted
}

const listOfDrinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "beer", price: 80 },
    { name: "water", price: 8 },
    { name: "watermelon juice", price: 35 },
    { name: "pineapple juice", price: 65 },
   ];

const final = sortDrinkByPrice(listOfDrinks);
console.log(final);
