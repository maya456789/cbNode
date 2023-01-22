var db=require('../models');

var Recipee=db.recipie;
var Users=db.user;
var Ingredient=db.ingredient;
var Process=db.process;

var getUserRecipe=async (req,resp)=>{

   var userdata=await Users.findAll({
    include:Recipee,
    // where:{id:103}
   });

    var response = {data:'One to one',record:userdata}
     
    resp.status(200).json(response);
}

var getRecipeDetail=async (req,resp)=>{

    let recipe_id=req.body.recipeid;

    var userdata=await Recipee.findAll({
       
     include:[{
        model:Ingredient,
        attributes:['items','amount']},
        {
            model:Process,
            attributes:['step']},
            {
                model:Users,
                attributes:['name',]}],
     where:{id:recipe_id}
    });
 
     var response = {data:'One to one',record:userdata}
      
     resp.status(200).json(response);
 }

module.exports={
    getUserRecipe,getRecipeDetail
}