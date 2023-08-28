const {
  signup,
  login,
  getAllUsers,
  userInfo,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const express = require("express");
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);
router.get("/", getAllUsers);
router.get("/:id", userInfo);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
