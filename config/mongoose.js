const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dev_saxena_04:qwerty123@cluster0.ga09u.mongodb.net/placeDB');
const db=mongoose.connection;
//error
db.on('error',console.error.bind(console,'error while connecting'));
//up and running then print the message.
db.once('open',()=>{
    console.log('connection successfully');
})
