module.exports = class Product {
  constructor(id, name, description, img, price, stock, balance) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.img = img;
    this.price = price;
    this.stock = stock;
    this.balance = balance;
  }
};
