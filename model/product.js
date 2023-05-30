const mongoose = require('mongoose');

const Productschema = mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    brand:{
        type : String,
        required:true
    },
    price:{ 
        type: Number,
        required:true
    }
})

module.exports = mongoose.model('myproduct',Productschema)