import express, {Express, Request, Response } from "express"
import "dotenv/config"
import env from "./ util/validateEnv"
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";



const port = env.PORT || 3000;


const app:Express = express();


mongoose.connect(env.MONGO_KEY);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



app.get("/", (req:Request, res:Response )=> {
    res.json({msg: "hello there"})
})

app.listen(port, ()=> 
console.log(`server running at port ${port}`))
