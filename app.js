let express = require('express');
let addCategory=require('./router/AddCategoryRout');
const cors = require('cors');
const addDoctor = require('./router/AddDoctorRout');
const addTestimonial=require('./router/AddTestimonialRout');
const addAppointment=require('./router/AppointmentRout')
const LoginRout = require('./router/LoginRout')
let app = express();
let nodemailer = require('nodemailer');


require('dotenv').config();

app.use(cors());
app.use(express.json());


app.use('/', addCategory);
app.use('/doctor', addDoctor);
app.use('/testimonial',addTestimonial);
app.use('/appointment',addAppointment);
app.use('/auth',LoginRout);

app.post('/sendMail',(req,res)=>{


  try {
    
 

    const {name, email,subject,phone,message} = req.body;    

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'bhanuchiluka234@gmail.com',
          pass: process.env.MAIL_SECRET
        }
      });
      
      var mailOptions = {
        from: email,
        to: "bhanuchiluka234@gmail.com",
        subject: subject,
        text: message+"\n Name : "+name+"\n Phone Number: "+phone+"\n Mail: "+email
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          return res.send(error.message)
        } else {
          console.log('Email sent: ' + info.response);
          return res.send("Success")

        }
      });
      


} 
catch (error) {
  console.log(error.message);
  return res.send(error.message)
}
})

app.listen(4000);




