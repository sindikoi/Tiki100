//router to check if the user exsist
const express = require('express');
const router = express.Router(); // create a router object

// route to check if the user exsists its our API
router.post('/check-user', async (req, res) => {
  try{
    const {name , password} = req.body;
    const user = await mongoose.connection.db.collection('users').findOne({name});
    if(user){
        if(user.password == password){
            res.json({exsist: true, correctPassword: true});
        }
        else {
            res.json({
                exsist: false,
                correctPassword: false,
            });
        }
    }
    else{
        res.json({exsist: false, correctPassword: false});
    }

  }catch(error){
    console.log(error);
    res.status(500).json({error: "Server error"})
  }  
    
});

//we need to export the router to use this code in the server
module.exports = router;