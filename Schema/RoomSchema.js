const mongoose = require('mongoose');


const RoomSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    image:{
        type: [String],
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    featured:{
        type: Boolean,
        default: false
    }
})

module.exports = RoomSchema;