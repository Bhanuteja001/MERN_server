let express=require('express')
require('../db');
let Category=require('../modal/CategoryModal');
const CategoryModal = require('../modal/CategoryModal');
let addCategoryRouting = express.Router();

addCategoryRouting.get("/addcategory",async(req,res)=>{

   try{
    let cat = await Category.find({})
   return res.send({data:cat});
   }

    catch (error) {
      return  res.send(error.message)
      }
});


addCategoryRouting.post("/addcategory",async(req,res)=>{
   try{
    const {name , content} = req.body;
    let cat=new Category({name:name, description:content});
    let results=await cat.save();
   return res.send(results);
   }

    catch (error) {
      return  res.send(error.message)
      }
});

addCategoryRouting.delete("/addcategory/:id",async(req,res)=>{
    try{
        const id1= req.params.id;
    let deleted = await Category.deleteOne({_id:id1})
   return res.send(deleted)
    }

    catch (error) {
      return res.send(error.message)
      }
});


addCategoryRouting.get("/addcategory/:id",async(req,res)=>{
  try{
    const id1 = req.params.id;
    let cat=await Category.findOne({ _id : id1 });
    return res.send(cat);
  }

   catch (error) {
   return res.send(error.message)
  }
});


addCategoryRouting.put("/addcategory/:id",async(req,res)=>{
    try{
        const id1 = req.params.id;
    console.log(req.body);
    let cat=await Category.updateOne({_id:id1},{$set: req.body});
   return res.send(cat);
    }

    catch (error) {
      return  res.send(error.message)
      }
});

module.exports = addCategoryRouting;




