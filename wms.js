//Warehouse management system

let inventory = [
  {
    name: "Product 1",
    price: 10,
    quantity: 100,
  },
  {
    name: "Product 2",
    price: 15,
    quantity: 50,
  },
  {
    name: "Product 3",
    price: 5,
    quantity: 200,
  },
];
// Create a function for adding new products.
const addProduct = (inventory, name, price, quantity) => {
  var newProduct = {
    name: name,
    price: price,
    quantity: quantity,
  };
  inventory.push(newProduct);
};
// Call the add new product function
addProduct(inventory, "Product 4", 17, 158);
console.log(inventory);

// Create a function for searching for products by name.
function findProductByName(inventory, productName) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) {
      return inventory[i];
    }
  }
  return null; // สินค้าไม่พบ
}

// Call the product search function.
var product = findProductByName(inventory, "Product 2");

if (product) {
  console.log("Product found:", product);
} else {
  console.log("Product not found.");
}

// Create a function for Modifying Products.
const editingProduct = (inventory, productName, newQuantity, newPrice) => {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) {
      inventory[i].price = newPrice;
      inventory[i].quantity = newQuantity;
      return inventory[i]; //editing was successes
    }
  }
  return false; //editing was not found.
};

// Call the modifying function
isEdited = editingProduct(inventory, "Product 1", 12, 150);

if (isEdited) {
  console.log("Product data updated successfully", isEdited);
} else {
  console.log("Product not found or datanot updated");
}

// Create a function for remove the product from inventory.
const removeProduct = (inventory, productName) => {
  for (i = 0; i < inventory.length; i++)
    if (inventory[i].name === productName) {
      inventory.splice(i, 1);
      return inventory[i];
    }
};
// Call the removeProduct function
removeProduct(inventory, "Product 3");
console.log(inventory);

// let isRemoved = removeProduct(inventory, "Product 2");

// if (isRemoved) {
//   console.log("Product removed successfully.", isRemoved);
// } else {
//   console.log("Product not found or not removed.");
// }

// สร้างฟังก์ชันสำหรับการคำนวณมูลค่ารวมของคลังสินค้า
function calculateTotalValue(inventory) {
  var totalValue = 0;
  for (var i = 0; i < inventory.length; i++) {
    totalValue += inventory[i].price * inventory[i].quantity;
  }
  return totalValue;
}
// Call the calculateTotalValue function
var totalValue = calculateTotalValue(inventory);
console.log("Total value of inventory:", totalValue);

// สร้างฟังก์ชันสำหรับค้นหาสินค้าที่มีราคาต่ำกว่าค่าที่กำหนด
function findProductsByPrice(inventory, maxPrice) {
  var lowPricedProducts = [];
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].price < maxPrice) {
      lowPricedProducts.push(inventory[i]);
    }
  }
  return lowPricedProducts;
}

// เรียกใช้งานฟังก์ชันค้นหาสินค้าที่มีราคาต่ำกว่า
var lowPricedProducts = findProductsByPrice(inventory, 150); //ต่ำกว่า150

console.log("Products with price lower than $10:", lowPricedProducts);

// สร้างฟังก์ชันสำหรับค้นหาสินค้าที่มีจำนวนคงเหลือน้อยกว่าค่าที่กำหนด
function findProductsByQuantity(inventory, maxQuantity) {
  var lowQuantityProducts = [];
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].quantity < maxQuantity) {
      lowQuantityProducts.push(inventory[i]);
    }
  }
  return lowQuantityProducts;
}

// เรียกใช้งานฟังก์ชันค้นหาสินค้าที่มีจำนวนคงเหลือน้อยกว่า 100
var lowQuantityProducts = findProductsByQuantity(inventory, 100);

console.log("Products with quantity lower than 100:", lowQuantityProducts);
