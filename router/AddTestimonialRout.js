let express=require('express');
require('../db');
let Caterory=require('../modal/CategoryModal');
let doctorModal=require('../modal/doctorModal');
const TestimonialModal=require('../modal/TestimonialModal')
let addTestimonialRouting = express.Router();

addTestimonialRouting.post('/addTestimonial',async(req,res)=>{
    try{
        console.log(req.body);
        const Testimonial=await TestimonialModal.create(req.body);
        res.send(Testimonial)
    } catch (error) {
           
      res.send(error.message)
    }


}),

addTestimonialRouting.get('/addTestimonial',async(req,res)=>{
  try {
    const Testimonial=await TestimonialModal.find({});
    res.send(Testimonial)
  } catch (error) {
    res.send(error.message)
  }
})



addTestimonialRouting.delete('/addTestimonial/:id',async(req,res)=>{
    try {
      const id= req.params.id
      const Testimonial=await TestimonialModal.deleteOne({_id:id});
      res.send(Testimonial)
    } catch (error) {
      res.send(error.message)
    }
  })


  addTestimonialRouting.put('/addTestimonial/:id',async(req,res)=>{
    try {
      const id = req.params.id;
      console.log(req.body)
      const Testimonial=await TestimonialModal.updateOne({_id : id},{$set:req.body})
      console.log(Testimonial);
      res.send(Testimonial)
    }
     catch (error) {
      res.send(error.message)
    }
  })

  
addTestimonialRouting.get('/addTestimonial/:id',async(req,res)=>{
    try {
      const id = req.params.id;
      console.log(req.params.id);
      const Testimonial=await TestimonialModal.findOne({_id:id});
      res.send(Testimonial)
    } catch (error) {
      res.send(error.message)
    }
  })
module.exports = addTestimonialRouting;