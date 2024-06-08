let express=require('express');
require('../db');
let appoinntmentModal = require('../modal/AppointmentModal')
let addAppointmentRouting = express.Router();

addAppointmentRouting.post('/bookAppointment',async(req,res)=>{
    try{const bookAppointment =await appoinntmentModal.create(req.body);
        res.send(bookAppointment)}
        catch (error) {
            res.send(error.message)
          }   
    
})

addAppointmentRouting.get('/bookAppointment',async(req,res)=>{
    try {
        const bookAppointment =await appoinntmentModal.find({});
    res.send(bookAppointment)

    } 
    catch (error) {
        res.send(error.message)
      }
})

addAppointmentRouting.delete('/bookAppointment/:id',async(req,res)=>{
    try{
        const id = req.params.id;
    const bookAppointment =await appoinntmentModal.deleteOne({_id:id});
    res.send(bookAppointment)

    }
    catch (error) {
        res.send(error.message)
      }
})
addAppointmentRouting.put('/bookAppointment/:id',async(req,res)=>{
   
    try{
        const id = req.params.id;
        const {status} = req.body;
        console.log(req.body);
        const bookAppointment =await appoinntmentModal.updateOne({_id:id},{$set:{status:status}});
        res.send(bookAppointment)
    
    }
    catch (error) {
        res.send(error.message)
      }
})



module.exports = addAppointmentRouting