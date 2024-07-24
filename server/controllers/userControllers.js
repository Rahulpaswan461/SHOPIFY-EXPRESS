
import User from '../models/user-schema.js'



export const userSignup = async (req,res)=>{
   try{
       const userName = req.body.userName;
       const exists = await User.findOne({userName:userName})  
       if(exists){
        return res.status(401).json({message:"UserName already exists !!"})
       }

      const user = req.body;
      const newUser = new User(user)
      await newUser.save()

      return res.status(200).json({message:user})
   }
   catch(error){
    console.log("Error while signup",error)
    return res.status(500).json({message:error.message})
   }
}

export const userLogin = async (req,res)=>{
   try{
     const userName = req.body.userName;
     const password = req.body.password;

   const user = await User.findOne({userName:userName,password:password})
   if(user){
      return res.status(200).json({data:user})
   }
   return res.status(401).json({message:"user not found !!"})
   }
   catch(error){
     console.log("Error while interting ",error)
     return res.status(500).json({message:"Internal Server error"})
   }
}
