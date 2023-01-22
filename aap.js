require('dotenv').config();
const express=require("express");
const app=express();


var cors = require('cors');
const bodyParser=require("body-parser");
const port=8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var getUserCtrl=require('./controllers/userController');
var getRecipe=require('./controllers/recipeController');

addDb=require('./models');//Importing index.js file

app.post('/authUser',getUserCtrl.getUser);
app.get('/getRecipe',getRecipe.getUserRecipe);
app.get('/getRecipeDetail',getRecipe.getRecipeDetail);

app.post('/getRecipeDetailProcess',getRecipe.getRecipeDetail);



app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})