let { movements, current_id } = require("../data/movements");
let { products } = require("../data/products");
let Movement = require("../models/Movement");
const { uuid } = require('uuidv4');

module.exports = class Init {
  constructor(data) {
    this.data = data;
  }
  performAction() {
    console.log("Init action");

    const exists = movements.find((o) => o.type === "init" && o.product == this.data.product_id);
    if (exists) {
      console.log("Ya existe");
      return false;
    }
    let total = Number(this.data.units) * Number(this.data.units_price);

    let foundIndex = products.findIndex(x => x.id == this.data.product_id);
    let item = products[foundIndex];
    
    item.stock = Number(this.data.units);
    item.price = Number(this.data.units_price);
    item.balance = Number(total);

    products[foundIndex] = item;
    // console.log(products);

    let movement = new Movement(
      uuid(),
      this.data.product_id,
      this.data.date,
      this.data.type,
      "Inventario inicial",
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
        units: this.data.units,
        units_price: this.data.units_price,
        total: total,
      }
    );

    movements.push(movement);
    return true;
  }
};
