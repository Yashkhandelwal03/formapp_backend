const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    console.log("The request is", req.body);
})

module.exports = router;