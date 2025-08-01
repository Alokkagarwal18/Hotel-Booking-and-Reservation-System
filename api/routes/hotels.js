import express from "express"
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import {countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updatedHotel } from "../controllers/hotel.js";

const router = express.Router();

//CREATE 
router.post("/", createHotel);
    
//UPDATE
router.put("/:id",updatedHotel);

// DELETE

router.delete("/:id",deleteHotel);

//GET

router.get("/find/:id", getHotel);

//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);


export default router