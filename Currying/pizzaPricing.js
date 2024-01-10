const basePrice = { small: 8, medium: 10, large: 12 };

function pizzaPricing(size) {
    return function (toppings) {
        return function (quantity) {
            const toppingPricePerUnit = toppings.length * 1.5;
            const toppingPrice = basePrice[size] + toppingPricePerUnit;
            return (toppingPrice * quantity).toFixed(2);
        };
    };
}

const totalPrice = pizzaPricing('medium')(['cheese', 'mushrooms'])(2);
console.log(totalPrice);