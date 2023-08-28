const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv").config({ path: "./config/.env" });
const userRoute = require("./routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connexion a la base de donnee
connectDB();

//routes
app.use("/api/user", userRoute);

module.exports = app;
