let mongoose=require('mongoose');
let categorySchema=new  mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }
    
    
})

module.exports=mongoose.model('categorys',categorySchema);