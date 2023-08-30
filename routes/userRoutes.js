const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getAllUsers,
  userInfo,
  updateUser,
  deleteUser,
  follow,
  unfollow,
  logout,
} = require("../controllers/userController");
const { auth } = require("../middleware/auth");

//AUTH
router.post("/signup", auth, signup);
router.post("/login", auth, login);
router.get("/logout", auth, logout);

//USER DISPLAY : BLOCK
router.get("/", auth, getAllUsers);
router.get("/:id", auth, userInfo);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);
router.patch("/follow/:id", auth, follow);
router.patch("/unfollow/:id", auth, unfollow);

module.exports = router;
