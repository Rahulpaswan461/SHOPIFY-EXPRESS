import mongoose, { disconnect } from "mongoose";

const productSchema = new mongoose.Schema({
     id:{
        type:String,
        required:true,
     },
     url:String,
     detailUrl:String,
     title:Object,
     price:Object,
     quantity:Number,
     description:String,
     tagline:String
})

const Product = mongoose.model("product",productSchema)

export default Product