import { IUser } from "@/interfaces/IUser";
import mongoose from "mongoose";

const user = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email addres"],
    index: true,
  },

  password: {
    type: String,
  },
});

export default mongoose.model<IUser & mongoose.Document>("User", user);
