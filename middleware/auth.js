const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.token; // Assurez-vous que vous avez bien installé et configuré le middleware cookie-parser
  if (token) {
    jwt.verify(token, process.env.TOKEN_KEY, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        res.cookie("token", "", { maxAge: 1 });
        next();
      } else {
        let user = await userModel.findById(decodedToken.userId); // Utilisez decodedToken.userId pour rechercher l'utilisateur
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.TOKEN_KEY, async (err, decodedToken) => {
      if (err) {
        console.log(err);
      } else {
        console.log(decodedToken.userId);
        next();
      }
    });
  } else {
    console.log("pas de token");
  }
};
