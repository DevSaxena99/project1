const mongoose= require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const stateSchema= new mongoose.Schema({
    place:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const State=mongoose.model('state',stateSchema);
module.exports=State;
