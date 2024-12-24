import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name Harus di isi"],
  },
  email: {
    type: String,
    required: [true, "Email Harus di Isi"],
  },
  password: {
    type: String,
    required: [true, "Password harus di isi"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
