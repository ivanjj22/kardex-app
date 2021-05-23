module.exports = class Movement {
    constructor(id, product, date, type, detail, data_in, data_out, balance) {
      this.id = id;
      this.product = product;
      this.date = date;
      this.type = type;
      this.detail = detail;
      this.data_in = data_in;
      this.data_out = data_out;
      this.balance = balance;
    }
   
  }
  