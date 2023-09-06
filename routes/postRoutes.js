const {
  readPost,
  deletePost,
  updatePost,
  createPost,
  likePost,
  unlikePost,
  commentPost,
  editCommentPost,
  deleteCommentPost,
} = require("../controllers/postController");

const router = require("express").Router();

router.get("/", readPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/like-post/:id", likePost);
router.patch("/unlike-post/:id", unlikePost);
router.patch("/comment-post/:id", commentPost);
router.patch("/edit-comment-post/:id", editCommentPost);
router.patch("/delete-comment-post/:id", deleteCommentPost);

module.exports = router;
