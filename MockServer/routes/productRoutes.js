const express = require("express");
const app = express();
let Product = require("../models/Product");
const { uuid } = require('uuidv4');
let { products, current_id } = require("../data/products");

app.get("/", (req, res) => {
  return res.send({
    ok: true,
    data: products,
  });
});

app.post("/", (req, res) => {
  const { name, description, img, price } = req.body;
  let item = new Product(uuid(), name, description, img, price, 0, 0);
  products.push(item);
  return res.send({
    ok: true,
    data: products,
  });
});

app.get("/:id", (req, res) => {
  let data = products.find((o) => o.id === req.params.id);
  return res.send({
    ok: true,
    data,
  });
});

app.put("/:id", (req, res) => {
  const {id, name, description, img, price, stock, balance} = req.body;
  let item = new Product(id, name, description, img, price, stock, balance);
  let foundIndex = products.findIndex(x => x.id == id);
  products[foundIndex] = item;

  return res.send({
    ok: true
  });
});

app.delete("/:id", (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.productId} resource`
  );
});

module.exports = app;
