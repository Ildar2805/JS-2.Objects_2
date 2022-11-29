const goods = [
    {
        id: 1,
        name: 'Fisher',
        description: 'profi',
        sizes: [190, 197, 200, 202],
        price: 50,
        available: true,
    }, 
    {
        id: 2,
        name: 'Atomic',
        description: 'profi',
        sizes: [190, 197, 200, 202],
        price: 45,
        available: true,
    },
    {
        id: 3,
        name: 'Rossignol',
        description: 'profi',
        sizes: [190, 197, 200, 202],
        price: 40,
        available: true,
    },
    {
        id: 4,
        name: 'Salomon',
        description: 'profi',
        sizes: [190, 197, 200, 202],
        price: 35,
        available: false,
    },
    {
        id: 5,
        name: 'Madshus',
        description: 'profi',
        sizes: [190, 197, 200, 202],
        price: 30,
        available: false,
    },
];

const basket = [
    {
        good: goods[0],
        amount: 1,
    },
    {
        good: goods[1],
        amount: 2,
    }
];

function add(n, size, count) {
    for (let i = 0; i < goods.length; i++) {
        if (goods[i].id === n && goods[i].available && goods[i].sizes.includes(size)) {
            basket.push({good: goods[i], amount: count});
            basket.at(-1).good.sizes = size;
        }
    }
    return basket;
}

function del(id) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].good.id === id) {
            basket.splice(i, 1);
        }
    }
    return basket;
}

function delete_all(){
    basket.length = 0;
    return basket;
}

function calculate() {
    let amount = 0;
    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
        amount += basket[i].amount;
        sum += basket[i].amount * basket[i].good.price;
    }

    const total = {
        totalAmount: amount,
        totalSum: sum,
    };
    return total;
}


delete_all();
add(1, 190, 5);
add(5, 197, 4);
add(3, 200, 1);
add(2, 202, 10);
del(1);
console.log(calculate());

