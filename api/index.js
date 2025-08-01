// import express from "express"
// import dotenv from "dotenv"
// import mongoose from "mongoose"
// import cookieParser from "cookie-parser"
// import authRoute from "./routes/auth.js"
// import usersRoute from "./routes/users.js"
// import hotelsRoute from "./routes/hotels.js"
// import roomsRoute from "./routes/rooms.js"
// import cors from "cors";

// const app = express()

// const connect  = async () =>{
//   try{
//     await mongoose.connect(process.env.MONGO);
//     console.log("Connected to mongodb")  
//   } catch(error){
//     throw error 
//   }
// };

// mongoose.connection.on("disconnected", () =>{
//   console.log("mongodb disconnected")
// })



// //middlewares
// app.use(cors());
// app.use(cookieParser())
// app.use(express.json())

// dotenv.config()


// app.use("/api/auth", authRoute)
// app.use("/api/users", usersRoute)
// app.use("/api/hotels", hotelsRoute)
// app.use("/api/rooms", roomsRoute)

// app.use((err, req, res, next) =>{
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong!";
//   return res.status(500).json({
//     success: false,
//     status: errorStatus,
//     mesaage: errorMessage,
//     stack: err.stack,
//   })
// })

// // mongoose.connection.on("connected", () =>{
// //   console.log("mongodb connected")
// // })


// app.listen(8800, () =>{
//   connect()
//   console.log("connected to backend")

// })


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

dotenv.config();

const app = express();

// CORS setup
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true,
}));

// Middleware
app.use(cookieParser());
app.use(express.json());

// DB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});

// API routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// Error handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(500).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Start server
app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});


