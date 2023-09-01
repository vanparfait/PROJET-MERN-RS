//: Importation du modèle
const userModel = require("../models/userModel");

const ObjectId = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await userModel.find().select("-password");
  res.status(200).json(users);
};

module.exports.userInfo = async (req, res) => {
  //console.log(req.params);
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });

  try {
    const user = await userModel.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });
  try {
    const userId = req.params.id;
    const updatedFields = {
      bio: req.body.bio,
    };

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      updatedFields,
      { new: true, select: "-password" }
    );

    if (!updatedUser) {
      return res.status(400).json({
        message: `L'utilisateur avec l'id ${userId} n'existe pas`,
      });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });

  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Message supprimé avec succès : " + req.params.id);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.follow = async (req, res) => {
  if (
    !ObjectId.isValid(req.params.id) ||
    !ObjectId.isValid(req.body.idToFollow)
  )
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });
  try {
    //add to the follower list
    await userModel
      .findByIdAndUpdate(
        req.params.id,
        { $addToSet: { following: req.body.idToFollow } },
        { new: true }
      )
      .then((data) => res.status(200).send(data));

    await userModel
      .findByIdAndUpdate(
        req.body.idToFollow,
        { $addToSet: { followers: req.params.id } },
        { new: true }
      )
      .then((data) => res.status(200).send(data));
  } catch (error) {
    res.status(400).json(error);
  }

  //add to following list
  await userModel.findByIdAndUpdate(
    req.body.idToFollow,
    { $addToSet: { followers: req.params.id } },
    { new: true },
    (err, docs) => {
      if (!err) res.status(201).json(docs);
      else return res.status(400).json(err);
    }
  );
};

module.exports.unfollow = async (req, res) => {
  if (
    !ObjectId.isValid(req.params.id) ||
    !ObjectId.isValid(req.body.idToUnFollow)
  )
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });

  try {
    const unfollowedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { following: req.body.idToUnFollow } },
      { new: true }
    );

    const updatedUnfollowedUser = await userModel.findByIdAndUpdate(
      req.body.idToUnFollow,
      { $pull: { followers: req.params.id } },
      { new: true }
    );

    res.status(200).json({ unfollowedUser, updatedUnfollowedUser });
  } catch (error) {
    res.status(400).json(error);
  }
};
