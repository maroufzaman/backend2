const express = require('express');
const router = express.Router();
const Subscribers = require('./models/subsribers'); 

router.get('/',(req,res)=>{

    res.send(Subscribers);
});

router.get('/name',(req,res)=>{
   const {name,subscribeChannel} = Subscribers;

   res.send(name + " "+ subscribeChannel); 
});

router.get('/:id',(req,res)=>{
    const {id}= Subscribers;

    if (id !== req.id){
        res.status(400).json({message: error.message});
    }

});