// Students Data //

function calculateDataStudents(students){
    let result = {
        score: {
            highest: students[0].score,
            lowest: students[0].score,
            average: 0,
        },
        age: {
            highest: (new Date() - students[0].age) / 31536000000,
            lowest: (new Date() - students[0].age) / 31536000000,
            average: 0
        },
    };

    let totalScore = 0;
    let totalAge = 0;
    for (let i = 0; i < students.length; i++){
        let years = (new Date() - students[i].age) / 31536000000
        if (students[i].score > result.score.highest){
            result.score.highest = students[i].score;
        }
        if (students[i].score < result.score.lowest){
            result.score.lowest = students[i].score;
        }
        if (years > result.age.highest){
            result.age.highest = students[i].age
        }
        if (years < result.score.lowest){
            result.age.highest = years;
        }
        totalScore += students[i].score;
        totalAge += years;
    }
    result.score.average = totalScore / students.length;
    result.age.average = totalAge / students.length;

    return result;
}

const students = [
    {
        name: "Raisa",
        email: "raisa.rahmadriani@gmail.com",
        age: new Date("1999-07-07"),
        score: 98,
    },
    {
        name: "Rahma",
        email: "sadriann17@gmail.com",
        age: new Date("1996-06-05"),
        score: 90,
    },
    {
        name: "Adriani",
        email: "rra.raisa.rahma@gmail.com",
        age: new Date("1992-12-02"),
        score: 92,
    }
];

console.log(calculateDataStudents(students))



// Product Transaction //

class Product{
    static productList = [];

    constructor(){
        this.productName;
        this.price;
    }

    get getProductName(){
        return this.productName;
    }
    
    set setProductName(productName){
        this.productName = productName;
    }

    set setPrice(price){
        this.price = price;
    }
}

class Transaction{
    constructor(){
        this.cart = [];
        this.total = 0;
    }
    addToCart(productName, qty){
        for (let item of Product.productList){
            if (productName == item.productName){
                let priceTotal = item.price * qty;
                let order = { ...item, quantity: qty, total: priceTotal };
                this.cart.push(order);
                this.total = this.total + priceTotal;
                return;
            }
        }

        console.log("barang tidak ada, mohon mencari barang yang ada")
    }

    get showTotal(){
        return this.total;
    }

    get checkout(){
        Object.freeze(this);
        return this;
    }
}


let product1 = new Product();
product1.setProductName = "RTX 3060";
product1.setPrice = 6000000;

let product2 = new Product();
product2.setProductName = "Aerocool ATX Tower";
product2.setPrice = 500000;

Product.productList.push(product1, product2);

console.log(Product.productList);

// ========================================== 

let trans1 = new Transaction();
trans1.addToCart("RTX 3060", 10);
console.log("trans1 => ", trans1);

let trans2 = new Transaction();
trans2.addToCart("Aerocool ATX Tower", 2);
trans2.addToCart("RTX 3060", 3);
//console.log("trans2 => ", trans2.showTotal);
//console.log("trans2 => ", trans2.checkout);
console.log("trans2 => ", trans2)
