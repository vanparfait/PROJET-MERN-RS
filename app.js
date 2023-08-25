const express = require("express");

const app = express();

app.use((req, res) => {
  console.log("Ecoute sur le port 5000");
  res.json({ message: "Ecoute sur le port 5000" });
});

module.exports = app;
