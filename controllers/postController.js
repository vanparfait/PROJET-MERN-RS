const postModel = require("../models/postModels");
const userModel = require("../models/userModel");

const ObjectId = require("mongoose").Types.ObjectId;

module.exports.readPost = async (req, res, next) => {
  try {
    const docs = await postModel.find().sort({ createdAt: -1 });
    res.json({ success: true, data: docs });
  } catch (error) {
    res.status(500).json({
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

module.exports.updatePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });
  try {
    const userId = req.params.id;
    const updatedFields = {
      message: req.body.message,
    };

    const updatePost = await postModel.findByIdAndUpdate(
      userId,
      updatedFields,
      { new: true }
    );

    if (!updatePost) {
      return res.status(400).json({
        message: `L'utilisateur avec l'id ${userId} n'existe pas`,
      });
    }

    res.status(200).json(updatePost);
  } catch (error) {
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

module.exports.deletePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });

  try {
    await postModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Message supprimé avec succès : " + req.params.id);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.likePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });

  try {
    // Effectuez la mise à jour du modèle postModel
    const postData = await postModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.id } },
      { new: true }
    );

    // Effectuez la mise à jour du modèle userModel
    const userData = await userModel.findByIdAndUpdate(
      req.body.id,
      { $addToSet: { likes: req.params.id } },
      { new: true }
    );

    // Envoyez une seule réponse avec les données mises à jour
    res.status(200).json({ postData, userData });
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports.likePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });

  try {
    // Effectuez la mise à jour du modèle postModel
    const postData = await postModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.id } },
      { new: true }
    );

    // Effectuez la mise à jour du modèle userModel
    const userData = await userModel.findByIdAndUpdate(
      req.body.id,
      { $addToSet: { likes: req.params.id } },
      { new: true }
    );

    // Envoyez une seule réponse avec les données mises à jour
    res.status(200).json({ postData, userData });
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports.likePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });

  try {
    // Effectuez la mise à jour du modèle postModel
    const postData = await postModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.id } },
      { new: true }
    );

    // Effectuez la mise à jour du modèle userModel
    const userData = await userModel.findByIdAndUpdate(
      req.body.id,
      { $addToSet: { likes: req.params.id } },
      { new: true }
    );

    // Envoyez une seule réponse avec les données mises à jour
    res.status(200).json({ postData, userData });
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports.likePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });

  try {
    // Effectuez la mise à jour du modèle postModel
    const postData = await postModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.id } },
      { new: true }
    );

    // Effectuez la mise à jour du modèle userModel
    const userData = await userModel.findByIdAndUpdate(
      req.body.id,
      { $addToSet: { likes: req.params.id } },
      { new: true }
    );

    // Envoyez une seule réponse avec les données mises à jour
    res.status(200).json({ postData, userData });
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports.likePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });

  try {
    // Effectuez la mise à jour du modèle postModel
    const postData = await postModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.id } },
      { new: true }
    );

    // Effectuez la mise à jour du modèle userModel
    const userData = await userModel.findByIdAndUpdate(
      req.body.id,
      { $addToSet: { likes: req.params.id } },
      { new: true }
    );

    // Envoyez une seule réponse avec les données mises à jour
    res.status(200).json({ postData, userData });
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports.likePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });

  try {
    // Effectuez la mise à jour du modèle postModel
    const postData = await postModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.id } },
      { new: true }
    );

    // Effectuez la mise à jour du modèle userModel
    const userData = await userModel.findByIdAndUpdate(
      req.body.id,
      { $addToSet: { likes: req.params.id } },
      { new: true }
    );

    // Envoyez une seule réponse avec les données mises à jour
    res.status(200).json({ postData, userData });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.unlikePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });

  try {
    // Effectuez la mise à jour du modèle postModel
    const postData = await postModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { likers: req.body.id } },
      { new: true }
    );

    // Effectuez la mise à jour du modèle userModel
    const userData = await userModel.findByIdAndUpdate(
      req.body.id,
      { $pull: { likes: req.params.id } },
      { new: true }
    );

    // Envoyez une seule réponse avec les données mises à jour
    res.status(200).json({ postData, userData });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.commentPost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });
  try {
    const postComment = await postModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: {
            commenterId: req.body.commenterId,
            commenterPseudo: req.body.commenterPseudo,
            text: req.body.text,
            timestamp: new Date().getTime(),
          },
        },
      },
      { new: true }
    );
    res.status(200).json({ postComment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.editCommentPost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });

  try {
    const post = await postModel.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const theComment = post.comments.find((comment) =>
      comment._id.equals(req.body.commentId)
    );

    if (!theComment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    theComment.text = req.body.text;

    const updatedPost = await post.save();

    return res.status(200).json({ post: updatedPost });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// module.exports.deleteCommentPost = async (req, res) => {
//   if (!ObjectId.isValid(req.params.id))
//     return res
//       .status(400)
//       .json({ error: "l'id " + req.params.id + " est inconnu" });

//   try {
//     const updatedPost = await postModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $pull: {
//           comments: {
//             _id: req.params.commentId,
//           },
//         },
//       },
//       { new: true }
//     );

//     if (!updatedPost) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     res.status(200).json({ post: updatedPost });
//   } catch (error) {
//     res.status(500).json({ erreur: error.message });
//   }
// };

module.exports.deleteCommentPost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .json({ error: "l'id " + req.params.id + " est inconnu" });

  try {
    const updatedPost = await postModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          comments: {
            _id: req.params.commentId,
          },
        },
      },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json({ post: updatedPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
