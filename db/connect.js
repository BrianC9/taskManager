import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log(`Connected succesfully to ${process.env.MONGODB_URL}`))
    .catch((err) => console.log(err))