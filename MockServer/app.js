require('dotenv').config()
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Importar rutas
var productRoutes = require('./routes/productRoutes');
var movementRoutes = require('./routes/MovementRoutes');

// Rutas
app.use('/products', productRoutes);
app.use('/movements', movementRoutes);


app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}!`));
