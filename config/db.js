const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://" +
        process.env.DB_USER_PASS +
        "@cluster0.68eauij.mongodb.net/PROJET-MERN",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connexion à MongoDB réussie !");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB :", error);
    process.exit();
  }
};

module.exports = connectDB;
