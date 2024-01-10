const goods = {
    apple: { price: 150, quantity: 2 },
    banana: { price: 75, quantity: 3 },
    orange: { price: 125, quantity: 1 }
};
function calculatePrice(goods) {
    let totalPrice = 0;
    for (let i in goods) {
        totalPrice += goods[i].price * goods[i].quantity;
    }
    return totalPrice;
}
console.log(calculatePrice(goods));
//output : 650