const mongoose= require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const countrySchema= new mongoose.Schema({
    place:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Country=mongoose.model('country',countrySchema);
module.exports=Country;
