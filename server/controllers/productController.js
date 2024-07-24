import Product from "../models/product-schema.js";

export const getProduct = async (req,res)=>{
   try{
       const productData = await Product.find({})
       if(!productData){
        return res.status(505).json({message:"No Data Available !!"})
       }
       return res.status(200).json(productData)
   }
   catch(error){
    console.log("Error while fething product data",error)
    return res.status(500).json({message:"Internal server Error"})
   }
}

export const getProductDetailsById =async (req,res)=>{
   try{
       const id = req.params.id
       const productDetail = await Product.findOne({'id':id})

       if(!productDetail){
         return res.status(404).json({message:"Id not found !!!"})
       }
       return res.status(200).json(productDetail)
   }
   catch(error){
      return res.status(500).json({message:"Internal server error"})
   }
}