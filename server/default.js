import { products } from "./constants/data.js"
import Product from "./models/product-schema.js"

const DefaultData =  async ()=>{
   try{
      await Product.deleteMany({})
      await Product.insertMany(products)
      console.log("Data imported successfully !!!")
   }
   catch(error){
    console.log("Error while inserting default data",error)

   }
}
export default DefaultData