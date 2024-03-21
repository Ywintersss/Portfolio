import mongoose from "mongoose";
import "dotenv/config";

const dbPass = encodeURIComponent(process.env.DB_PASS);
const uri = `mongodb+srv://Kelly:${dbPass}@app.euaxint.mongodb.net/?retryWrites=true&w=majority&appName=App`;
//connect to database
export default async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("connected to database");
    } catch (err) {
        console.log(err);
    }   
}

