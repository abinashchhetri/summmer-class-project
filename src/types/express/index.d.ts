import { IProduct } from "@/interfaces/IProduct";
import { IUser } from "@/interfaces/IUser";
import { Document, Model } from "mongoose";

declare global {
   namespace  Models{
    export type UserModel = Model<IUser & Document>

    export type ProductModel = Model<IProduct & Document>
   } 
}