const express = require('express');
const router = express.Router();
const { User } = require('../models/index.js');

router.post('/',async (req,res)=>{
    console.log("The request is", req.body);
    const response = await User.findOneAndUpdate({name:req.body.name},req.body,{upsert:true,new:true});
    console.log("The response is", response);
    res.status(200).send(response);
})

module.exports = router;