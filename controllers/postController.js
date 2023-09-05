const postModel = require("../models/postModels");

const ObjectId = require("mongoose").Types.ObjectId;

module.exports.readPost = async (req, res, next) => {
  try {
    const docs = await postModel.find();
    res.json({ success: true, data: docs });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        error: "Une erreur s'est produite lors de la récupération des données.",
      });
  }
};

module.exports.createPost = async (req, res, next) => {
  const newPost = new postModel({
    posterId: req.body.posterId,
    message: req.body.message,
    video: req.body.video,
    likers: [],
    comments: [],
  });
  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (error) {
    return res.status(400).json(error);
  }
};
module.exports.updatePost = (req, res, next) => {};
module.exports.deletePost = (req, res, next) => {};
