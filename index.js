const express = require("express");
const bodyParser = require("body-parser");
const db=require('./config/mongoose');
const https = require("https");
const app = express();
const port=process.env.PORT || 3000;
const MongoStore = require('connect-mongo');

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./assets'));
app.set("view engine","ejs");
app.set('views','./views');

app.use('/',require('./routes/index.js'));
app.listen(port,function(err){
  if(err)
  {
     console.log(err)
  }
  else
  console.log(`working fine on port: ${port}`);
})
