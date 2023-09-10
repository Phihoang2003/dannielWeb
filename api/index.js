import express from "express"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import productRoute from "./routes/productRoute.js"
import { errorHandler, notFound } from "./middleware/errorHandler.js"
import authRoute from "./routes/authRoute.js"
import blogRoute from "./routes/blogRoute.js"
import categoryRoute from "./routes/categoryRoute.js"
import blogCatRoute from "./routes/blogCatRoute.js"
import couponRoute from "./routes/couponRoute.js"
import brandRoute from "./routes/brandRoute.js"
import colorRoute from "./routes/colorRoute.js"
import uploadRouter from "./routes/uploadRoute.js"
import cors from "cors"
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

app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user",authRoute)
app.use("/api/product",productRoute)
app.use("/api/blog",blogRoute)
app.use("/api/category",categoryRoute)
app.use("/api/blogCat",blogCatRoute)
app.use("/api/coupon",couponRoute)
app.use("/api/brand",brandRoute)
app.use("/api/color",colorRoute);
app.use(notFound)
app.use(errorHandler);
app.use("/api/upload", uploadRouter);
app.listen(port,()=>{
    connect();
    console.log('Connect to backend');
    console.log(`Example app listening on port ${port}`);
})