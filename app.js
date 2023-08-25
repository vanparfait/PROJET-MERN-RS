const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config({ path: "./config/.env" });

connectDB();
const app = express();
app.use((req, res) => {
  console.log("Ecoute sur le port" + process.env.PORT);
  res.json({ message: "Ecoute sur le port" + process.env.PORT });
});

module.exports = app;
