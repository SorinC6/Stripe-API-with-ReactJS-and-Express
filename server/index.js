require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
app.use(cors());
app.use(express.json());

const configureRoutes = require("./routes");
app.use(configureRoutes);
app.listen(5000, error => {
  if (error) throw error;
  console.log("Server running on port " + 5000);
});
