import mongoose from "mongoose";
import {config} from 'dotenv'

config()

const connectWithMongoDB = async () => {
    try {
        const connectinInstance = await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected");
        console.log(connectinInstance.connection.host);
    } catch (error) {
        console.log("Database Connection failed");
        
    }
}


export default connectWithMongoDB