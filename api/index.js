import express from "express"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import productRoute from "./routes/productRoute.js"
import { errorHandler, notFound } from "./middleware/errorHandler.js"
import authRoute from "./routes/authRoute.js"
dotenv.config()
const port =8080;
const app=express()

const connect =async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connect to Mongo");

    } catch (error) {
        throw error;
    }
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user",authRoute)
app.use("/api/product",productRoute)
app.use(notFound)
app.use(errorHandler);

app.listen(port,()=>{
    connect();
    console.log('Connect to backend');
    console.log(`Example app listening on port ${port}`);
})