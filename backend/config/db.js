import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://Database API/food-del').then(()=>console.log("DB Connected"));
   
}


