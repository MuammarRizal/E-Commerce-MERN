import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name Harus di isi"],
    unique: [true, "Username sudah pernah digunakan"],
  },
  email: {
    type: String,
    required: [true, "Email Harus di Isi"],
    unique: [true, "Email sudah pernah di daftarkan"],
    validate: {
      validator: validator.isEmail,
      message: "Inputan harus berformat email foo@gmail.com",
    },
  },
  password: {
    type: String,
    required: [true, "Password harus di isi"],
    minLength: [6, "Password minimal harus 6 character"],
  },
  role: {
    type: String,
    enum: ["user", "owner"],
    default: "user",
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
