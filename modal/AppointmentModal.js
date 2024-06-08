let mongoose=require('mongoose');
let appointmentSchema=new  mongoose.Schema(
    {
    name:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },subject:{
        type:String,
        required:true
    },phone:{
        type:String,
        required:true
    },message:{
        type:String,
        required:true
    },doctorname:{
        type:String,
        required:true
    },hospital:{
        type:String,
        required:true
    },status:{
        type:String,
        required:true,
        default:"Pending"
    }}
)

module.exports=mongoose.model('appointment',appointmentSchema);