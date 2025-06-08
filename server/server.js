require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

//connect to mongoDB , the user are for the mongo will work well
// takes the data uri from the .env if he can connect 
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => { console.log("connected to MongoDB")

  //middleware
   app.use(cors());
   app.use(express.json());

//the check of the user coonects our router to the server
  app.use('/api/auth', require('./routes/auth'));

})
.catch ((err) => console.log(err));
