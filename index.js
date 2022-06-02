const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

//Middle Ware
app.use(express.json());
app.use(cors());

// Handling routes request
app.use('/home', require('./routes/Home'));
app.use('/auth', require('./routes/Auth'));

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log('connected to mongoDB');
  } 
  catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
    console.log('Mongodb disconnected');
})

mongoose.connection.on('connected', () => {
    console.log('Mongodb connected');
})





app.get('/', (req, res) => {
  res.send('Hello from Index js');
});

app.listen(port, () => {
  run();
  console.log('Server is Running', port);
});
