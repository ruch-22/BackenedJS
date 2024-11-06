import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    const MONGODB_URI = `mongodb+srv://Ruchika16:RuchikaMDB22@cluster0.vb4bz.mongodb.net`;
    try{
        const connectionInstance = await mongoose.connect(MONGODB_URI,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch(error){ console.log("MONGODB connection FAILED",error);
        process.exit(0)
        }
    
}

export default connectDB