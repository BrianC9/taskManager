import mongoose from "mongoose";
const connectDB = (url) => {

    mongoose.connect(url)
        .then(() => console.log(`Connected succesfully to ${process.env.MONGODB_URL}`))
        .catch((err) => console.log(err))
}
export default connectDB;