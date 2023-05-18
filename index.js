const express =require('express')
const server =express();
const productRouter=require('./routes/product')
const userRouter=require('./routes/user');
const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const DBURI =
"mongodb+srv://contour:aliibrahim@cluster0.4hxwa4n.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DBURI)
  .then((res)=>console.log("mongodb connect"))
  .catch((err)=>console.log("DB ERROR",err));
//aliibrahim-- admin p
//123456 --Db p
///body Parser 
server.use(express.json());
server.use(express.static('public'))
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);


server.listen(8080,()=>{
    console.log('server started')
})