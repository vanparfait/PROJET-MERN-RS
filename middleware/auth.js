const jwt = require("jsonwebtoken");
module.exports.checkUser = (req, res, next) => {
  try {
    const token = req.cookies.token; // Assurez-vous que vous avez bien installé et configuré le middleware cookie-parser
    if (!token) {
      return res.status(401).json({ error: "Token non fourni" });
    }

    const decodedToken = jwt.verify(token, process.env.TOKEN_KEY); // Assurez-vous que TOKEN_KEY est correctement défini dans votre environnement
    const userId = decodedToken.userId;
    console.log(userId);
    req.auth = {
      userId: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error: "Token invalide" }); // Vous pouvez personnaliser le message d'erreur ici
  }
};

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.TOKEN_KEY, async (err, decodedToken) => {
      if (err) {
        console.log(err);
      } else {
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    console.log("pas de token");
  }
};
