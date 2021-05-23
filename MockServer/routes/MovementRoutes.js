const express = require("express");
const app = express();

let StrategyManager = require("../strategy/StrategyManager");
let Selling = require("../strategy/Selling");
let Init = require("../strategy/Init");
let Purchase = require("../strategy/Purchase");

let { movements } = require("../data/movements");

app.get("/", (req, res) => {
  let { product_id } = req.query;

  let items = movements.filter(o=> o.product == product_id);

  return res.send({
    ok: true,
    data: items,
  });
});

app.post("/", (req, res) => {
  const strategyManager = new StrategyManager();

  switch (req.body.type) {
    case "init":
      const init = new Init(req.body);
      strategyManager.strategy = init;
      strategyManager.performAction();
      break;
    case "purchase":
      const purchase = new Purchase(req.body);
      strategyManager.strategy = purchase;
      strategyManager.performAction();
      break;
    case "selling":
      const selling = new Selling(req.body);
      strategyManager.strategy = selling;
      strategyManager.performAction();
      break;
    default:
      break;
  }

  return res.send({
    ok: true,
    data: movements,
  });
});

module.exports = app;
