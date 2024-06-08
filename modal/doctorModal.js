let mongoose=require('mongoose');
let categorySchema=new  mongoose.Schema({
    treatmentname:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    qualification:{
        type: String,
        required: true,
    },
    experience:{
        type: Number,
        required: true,
    },
    hospital:{
        type: String,
        required: true,
    }
})

module.exports=mongoose.model('doctor',categorySchema);