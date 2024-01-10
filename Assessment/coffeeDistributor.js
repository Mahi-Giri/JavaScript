const orders = [
    {
        orderNumber: 1,
        items: [
            { name: "Cappuccino", price: 3.5 },
            { name: "Chocolate Croissant", price: 2.5 }
        ]
    },
    {
        orderNumber: 2,
        items: [
            { name: "Latte", price: 4.0 },
            { name: "Blueberry Muffin", price: 2.75 }
        ],
        discountCode: "COFFEELOVER"
    }
];

function totalOrderValue(orders, applyDiscount) {
    const orderTotals = orders.map((order) => {
        let total = order.items.reduce((result, current) => result + current.price, 0);
        if (order.discountCode) {
            total = applyDiscount(order.discountCode, total);
        }
        return total;
    });
    const grandTotal = orderTotals.reduce((result, current) => result + current, 0);
    return grandTotal.toFixed(2);
};

const applyDiscount = (discountCode, total) => {
    switch (discountCode) {
        case "COFFEELOVER":
            return total * 0.9;
        case "TEALOVER":
            return total * 0.8;
        default:
            return total;
    }
};

const finalTotal = totalOrderValue(orders, applyDiscount);
console.log(finalTotal);