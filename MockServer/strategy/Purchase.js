let { movements, current_id } = require("../data/movements");
let { products } = require("../data/products");
let Movement = require("../models/Movement");
const { uuid } = require('uuidv4');

module.exports = class Purchase {
  constructor(data) {
    this.data = data;
  }
  performAction() {
    console.log("Purchase");

    let foundIndex = products.findIndex(x => x.id == this.data.product_id);
    let item = products[foundIndex];
    
    let total = Number(this.data.units) * Number(this.data.units_price);
    
    item.stock = Number(this.data.units) + item.stock;
    item.price = this.data.units_price;
    item.balance = total + item.balance;

    products[foundIndex] = item;
    
    let movement = new Movement(
      uuid(),
      this.data.product_id,
      this.data.date,
      this.data.type,
      "Compra",
      {
        units: this.data.units,
        units_price: this.data.units_price,
        total: total,
      },
      {
        units: 0,
        units_price: 0,
        total: 0,
      },
      {
        units: item.stock,
        units_price: item.price,
        total: item.balance,
      }
    );

    movements.push(movement);
    return true;


  }
};
