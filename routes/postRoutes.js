const {
  readPost,
  deletePost,
  updatePost,
  createPost,
} = require("../controllers/postController");

const router = require("express").Router();

router.get("/", readPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
