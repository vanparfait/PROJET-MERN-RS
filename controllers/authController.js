//: Importation du modèle
const userModel = require("../models/userModel");
//: Importation de bcrypt
const bcrypt = require("bcrypt");
//: Importation de jsonwebtoken
const jwt = require("jsonwebtoken");

module.exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new userModel({
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() =>
          res.status(201).json({ message: "Utilisateur créé avec succès !" })
        )
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) =>
      res.status(500).json({
        message: "Une erreur interne s'est produite.",
        error: error.message,
      })
    );
};

module.exports.login = (req, res, next) => {
  //console.log(userModel);
  userModel
    .findOne({ email: req.body.email })
    .then((user) => {
      //console.log(user);
      if (!user) {
        return res.status(401).json({ error: "L'utilisateur n'existe pas ! " });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          //if (!req.body.pseudo) res.status(200).json({ error: "nnnnnnnnnnnn" });
          // res.status(200).json({
          //   userId: user._id,
          //   token: jwt.sign({ userId: user._id }, process.env.TOKEN_KEY, {
          //     expiresIn: "24h",
          //   }),
          // });
          res.cookie(
            "token",
            jwt.sign({ userId: user._id }, process.env.TOKEN_KEY),
            {
              maxAge: 24 * 60 * 60 * 1000, // expire dans 24 heures
              httpOnly: true, // Empêche JavaScript de lire le cookie
            }
          );
          res.status(200).json({
            userId: user._id,
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

module.exports.logout = async (req, res, next) => {
  res.cookie("token", "", { maxAge: 1 });
  //res.redirect("/");
};
