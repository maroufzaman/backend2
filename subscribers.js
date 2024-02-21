const mongoose = require('mongoose');

const subscribersSchema = new mongoose.Schema({
  id:{
    type: Number,
    required: true
  },
    name:{
        type:String,
        required:true
    },
    subscribesChannel:{
     type:String,
     required: true
    }
}) ;

module.exports = mongoose.model('Subscribers',subscribersSchema); 
