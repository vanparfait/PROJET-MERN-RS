const {
  signup,
  login,
  getAllUsers,
  userInfo,
  updateUser,
  deleteUser,
  follow,
  unfollow,
} = require("../controllers/userController");

const express = require("express");
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);
router.get("/", getAllUsers);
router.get("/:id", userInfo);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.patch("/follow/:id", follow);
router.patch("/unfollow/:id", unfollow);

module.exports = router;
