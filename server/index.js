import express from "express";
import { Connection } from "./database/db.js";
import dotenv from 'dotenv'
import DefaultData from "./default.js";
import router from "./routes/route.js";
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express();
dotenv.config()
const PORT = 8000
const Password = process.env.DB_PASSWORD
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
Connection(Password);
app.use("/",router)

app.listen(PORT,() => {
    console.log(`Server connected successfully on port ${PORT}`);
})
DefaultData()