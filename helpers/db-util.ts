import mongoose from "mongoose"

export const dbConnect=async()=>{
    const url=process.env.mongoDB_URL!;
    await mongoose.connect(url)
}