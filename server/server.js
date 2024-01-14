const express = require("express"); // Import express from "express"; : เป็นตัว FW สำหรับใช้กับตัว node.js ทำให้สามารถเขียนโค้ดได้ง่ายขึ้น
const morgan = require("morgan"); // Improt morgan from "morgan"; : 
const cors = require("cors"); // Import cors from "cors"; : เป็นตัวกำหนดสิทธิเข้าถึงตัวเว็บไซต์ โดยวิธีให้ทำงานจำเป็นต้องใช้ "app.use(cors())" ดูเพิ่มเติม: https://www.youtube.com/watch?v=limIuHNbLR4
const mongoose = require("mongoose"); // Import mongoose from "mongoose"; : เป็นตัวเชื่อมต่อกับฐานข้อมูล MongoDB

//setup start dotenv
require("dotenv").config();

//import routers
const blogRoute = require("./routes/blog");

//setup express
const app = express();


//connect cloud database
mongoose.connect(process.env.MONGODB_CONNECTION, {
    useUnifiedTopology: false,
}).then(()=> console.log("connection success!"))
.catch((err)=> console.log(`connection fail: ${err}`))

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//routes
app.use('/api', blogRoute.blogs);

const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`start server in port: ${port}`))