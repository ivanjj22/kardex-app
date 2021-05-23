let { movements, current_id } = require("../data/movements");
let { products } = require("../data/products");
let Movement = require("../models/Movement");
const { uuid } = require('uuidv4');

module.exports = class Selling {

  constructor(data) {
    this.data = data;
  }

  performAction() {
    console.log("Selling action");

    let total = Number(this.data.units) * Number(this.data.units_price);

    let foundIndex = products.findIndex(x => x.id == this.data.product_id);
    let item = products[foundIndex];
    
    let stockCount = item.stock - Number(this.data.units);

    if (stockCount < 0) {
      console.log("Sin existencias")
      return false;
    }


    item.stock = stockCount;
    item.price = this.data.units_price;
    item.balance = item.balance - total;


    products[foundIndex] = item;

    let movement = new Movement(
      uuid(),
      this.data.product_id,
      this.data.date,
      this.data.type,
      "Venta",
      {
        units: 0,
        units_price: 0,
        total: 0,
      },
      {
        units: this.data.units,
        units_price: this.data.units_price,
        total: total,
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
