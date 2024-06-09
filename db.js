let mongoose = require('mongoose');
require('dotenv').config();
let con=mongoose.connect(process.env.DATABASE_URL);
if(con){
    console.log("connected😁👍");
}
else{
    console.log("not connected😒");
}