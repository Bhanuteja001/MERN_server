let mongoose = require('mongoose');
let con=mongoose.connect('mongodb://localhost:27017/MERN_Project');
if(con){
    console.log("connected😁👍");
}
else{
    console.log("not connected😒");
}