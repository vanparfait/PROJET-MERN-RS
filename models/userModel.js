const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      unique: true,
      maxLength: 55,
      minLength: 3,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 6,
      max: 1024,
    },
    picture: { type: String, default: "./uploads/profil/random-user.png" },
    bio: { type: String, max: 1024 },
    followers: { type: [String] },
    following: { type: [String] },
    likes: { type: [String] },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
