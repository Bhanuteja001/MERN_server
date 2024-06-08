let mongoose=require('mongoose');
let TestimonialSchema=new mongoose.Schema({
    testimonial:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },

})

module.exports=mongoose.model('testimonial',TestimonialSchema);