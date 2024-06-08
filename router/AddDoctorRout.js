let express=require('express')
require('../db');
let Category=require('../modal/CategoryModal');
const doctorModal = require('../modal/doctorModal');
let addDoctorRouting = express.Router();

addDoctorRouting.post('/addDoctor',async(req,res)=>{
   try {
    console.log(req.body);
    const addDoctor=await doctorModal.create(req.body);
    res.send(addDoctor)
   } catch (error) {
    res.send(error.message)
  }
}),

addDoctorRouting.get('/addDoctor',async(req,res)=>{
  
    try{
        let cat = await doctorModal.find({});
    console.log(cat);
    res.send(cat);
    }

    catch (error) {
        res.send(error.message)
      }
}),

addDoctorRouting.delete('/addDoctor/:id',async(req,res)=>{
    try{
        const id = req.params.id;
    const addDoctor=await doctorModal.deleteOne({_id:id});
    res.send({data:addDoctor})
    }

    catch (error) {
        res.send(error.message)
      }
}),

addDoctorRouting.get('/addDoctor/:id',async(req,res)=>{
    try{
        const id1 = req.params.id;
    let cat=await doctorModal.findOne({ _id : id1 });
    res.send(cat);
    }

    catch (error) {
        res.send(error.message)
      }
 });
 
 addDoctorRouting.put('/addDoctor/:id',async(req,res)=>{
    try{
        const id1 = req.params.id;
    let cat=await doctorModal.updateOne({ _id : id1 },{$set:req.body});
    console.log(cat);
    res.send(cat);
    }

    catch (error) {
        res.send(error.message)
      }
 });


module.exports = addDoctorRouting;