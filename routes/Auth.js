// Importing the module
const express=require("express")

// Creating express Router
const router=express.Router()

// Handling auth request
router.get("/",(req,res,next)=>{
	res.send("This is the auth request")
})
module.exports=router
