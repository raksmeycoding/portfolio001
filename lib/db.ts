import mongoose from "mongoose"


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        console.log("MongoDB Connected!");
    } catch (error) {
        console.log(`Error connecting database: ${error}`);
    }
}


export default connectDb;