const jwt =require('jsonwebtoken')
const userModel = require('../model/users');
const fs = require('fs');
const path = require('path')
const bcrypt =require('bcrypt');
const UserModel = require('../model/users');
const privateKey = "sdasdasdasdkasjdoasd55457897adsasfdsfsdf"
const asyncHandler = require("express-async-handler") 
// create user
exports.signup= async (req,res)=>{
  console.log(privateKey)
    // console.log("user data",req.body);
    const {userName, email, password} = req.body
     const hashedPassword = await bcrypt.hash(password, 10)
    const user = new userModel({
      userName,
      email,
      password: hashedPassword
    });
    var token = jwt.sign({ email: req.body.email },privateKey);

     user.token = token;
     user.password= await bcrypt.hash(req.body.password,10);

   user.save().then(savedDoc =>{
      res.status(201).json(savedDoc);
      console.log(savedDoc)
   }).catch(err=>{
    res.status(201).json(err);
   })
 };


 exports.login = async(req, res)=>{
  const {email, password} = req.body;

  if(!email || !password){
      res.status(400);
      // throw new Error("all fields are mendatory")
  }

  const user = await userModel.findOne({email})
  console.log(user)
  // comparing hashed password
  if(user && (await bcrypt.compare(password, user.password))){
      const accessToken = jwt.sign(
          {
              user: {
                  userName: user.userName,
                  email: user.email,
                  id: user.id
              },
          },
          privateKey,
              { expiresIn: "2h" }
      )
      res.status(201).json({accessToken})
      // console.log(user)
  } 
  else{
      res.status(400)
      throw new Error("Email or password not correct")
  }
}

// const CurrentUser = asyncHandler(async(req, res)=>{
//   const user = req.user
//   res.json(user)
// })

//  exports.login = async (req, res) => {
//    try {
//     const doc = await UserModel.findOne({ email: req.body.email });
//     if(user && (await bcrypt.compare(password, user.password))){

//     }
    
//     if(doc){
//         res.send({
//           status:true,
//           token: doc.token,
//           message:"Login SuccessFully"
//         })      
//     }
//     else{
//       res.send({
//         status:false,
//         message:"Email or Password Is Invalid"})
//     }
//    }
//    catch(err){
//     res.send({
//       message:err.message

//     })
//    }
//  };