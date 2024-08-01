import { IProduct } from "@/interfaces/IProduct";
import mongoose from "mongoose";

const product = new mongoose.Schema({
    name : {
        type : String ,
        unique: true, 

    },
    price : {
        type : Number,

    },
    productUrl : {
        type : String
    },

    addedBy : {
        type : mongoose.Schema.Types.ObjectId
    }
    // mongoose.Schema.Types.ObjectId
});


export default mongoose.model<IProduct & mongoose.Document>("Product", product)