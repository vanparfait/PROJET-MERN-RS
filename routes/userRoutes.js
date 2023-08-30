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
//const { auth } = require("../middleware/auth");

//AUTH
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

//USER DISPLAY : BLOCK
router.get("/", getAllUsers);
router.get("/:id", userInfo);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.patch("/follow/:id", follow);
router.patch("/unfollow/:id", unfollow);

module.exports = router;
