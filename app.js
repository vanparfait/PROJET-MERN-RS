//TOKEN_KEY="RANDOM_TOKEN_SECRET" 2h50
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config({ path: "./config/.env" });
const userRoute = require("./routes/userRoutes");
const { checkUser, requireAuth } = require("./middleware/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

//connexion a la base de donnee
connectDB();

//routes
app.use("/api/user", userRoute);

module.exports = app;
