const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
  },
  isOwner: {
    type: Boolean,
    required: [true, "Is Owner is required"],
  },
});

module.exports = mongoose.model("Users", UserSchema);
