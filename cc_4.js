// Task 1: If Statements - Customer Discounts
// Frodo is buying supplies for his journey to Mordor
let purchaseAmount = 120;
if (purchaseAmount > 100) {
    purchaseAmount *= 0.9; // Gandalf applies a 10% discount for noble quests
}
console.log(`Final amount after discount: $${purchaseAmount} (Gondorian Gold)`);

// Task 2: For Loop - Sales Report
// The dwarves of Erebor are calculating their total treasure sales
let sales = [120, 85, 200, 150, 90];
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}
console.log(`Total sales from Erebor's market: $${totalSales} (Gold Coins)`);

// Task 3: While Loop - Inventory Depletion
// The Shire's pipeweed supply is running low
let stock = 10;
while (stock > 0) {
    stock--;
    console.log(`Stock remaining in the Green Dragon: ${stock} barrels`);
}
// Task 4: Do...While Loop - Customer Survey
// The Prancing Pony is gathering reviews from travelers
let responses = 0;
do {
    responses++;
    console.log(`Survey responses collected: ${responses} travelers`);
} while (responses < 3);

// Task 5: For...In Loop - Employee Information
// The Fellowship's roster is being reviewed
let employee = { name: "Aragorn", position: "Ranger of the North", salary: 75000 };
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}
// Task 6: For...Of Loop - Product Listings
// Rivendell's Elven shop catalog
let products = ["Elven Cloak", "Lembas Bread", "Mithril Shirt"];
for (let product of products) {
    console.log(`Item available in Rivendell: ${product}`);
}

// Task 7: forEach() Method - Order Processing
// The One Ring must be tracked at every stage of its journey
let orders = ["Bag End", "Rivendell", "Moria", "Gondor", "Mount Doom"];
orders.forEach(order => console.log(`Ring passed through: ${order}`));

// Task 8: Function Declaration - Tax Calculation
// Gondor's tax collection on imported goods
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
console.log(`Tax on 100 gold coins at 7%: $${calculateTax(100, 0.07)} (Gondorian Gold)`);

