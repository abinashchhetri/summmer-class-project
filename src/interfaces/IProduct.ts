import mongoose from "mongoose";

export interface IProduct {
  name: string;
  price: number;
  imageUrl: string;
  addedby: mongoose.Schema.Types.ObjectId;
}
