// Importing express module
// import RoomSchema from '../Schema/RoomSchema.js';
const express=require("express")
const { default: RoomSchema } = require("../Schema/RoomSchema.js")
const router=express.Router()

// Handling request using router

router.post("/",async(req,res,next)=>{


	const newRoom = new RoomSchema(req.body);

	try{

		const savedRoom = await newRoom.save();
		res.status(200).send('ok')


	}
	catch(error){
		res.status(5000).send(error)
	}

})

// Importing the router
module.exports=router
