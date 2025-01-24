import mongoose from "mongoose";

export const connectDB = async()=>{
    
    try {
       
       await mongoose.connect(`${process.env.DB_URL}uber`);
       console.log(`Database connect successfully`);
    } catch (error) {
        console.log(`Error While connecting to database ${error}`);
    }
}