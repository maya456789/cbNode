
var db=require('../models');

var User=db.user;

var addCustomer=async (req,res)=>{

    let name=req.body.customer_name;
    let address=req.body.customer_address;
    let mobile_no=req.body.customer_mobile;
    let credit_limit=req.body.credit_limit;
    

    let data=await Customer.create({
        name:name,address:address,mobile:mobile_no,credit_limit:credit_limit,
        
    });
    console.log("Customer Name :",name);
    var response = data;
     
    res.status(200).json(response);

}

var getUser=async (req,resp)=>{
   // let data= await User.findAll({});// findOne find one record

   let uid=req.body.userName;
   let pwd=req.body.password;

    const project = await User.findOne({ where: { user_id: uid , password : pwd } });
if (project === null) {
  console.log('Not found!');
  data='Not found!';
  resp.status(401).json(data);
} else {
 // console.log(project instanceof Project); // true
  console.log(project.user_id); // 'My Title'
  data=project;
  resp.status(200).json(data);
}

    //--------Find end<----------// 
   
     
    

}

module.exports={
    addCustomer,getUser
}