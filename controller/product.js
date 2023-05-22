const fs =require('fs')
// const index =fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
const products =data.products;
const productModel = require('../model/product');
const mongoose = require("mongoose");
const ProductModel = require('../model/product');
// const Product = module.Product;

exports.create= (req,res)=>{
    console.log(req.body);
   //  products.push(req.body);
   //    res.status(201).json(req.body);

   // const objToSend =req.body;
   // productModel.create(objToSend,(err,data)=>{
   //   if(err){
   //    res.send(`internal error :${err}`)
   //   }else{
   //    res.send("user successfully");
   //   }
   // });

   const product= new productModel(req.body);
   console.log(product)
   // product.title ='phoneX';
   // product.price ='phoneX';
   product.save().then(savedDoc =>{
      res.status(201).json(savedDoc);
      console.log(savedDoc)
   })
   
   // product.save((err,doc)=>{
   //    console.log({err,doc})
   //    res.status(201).json(doc);
   // })
 };
 exports.getAll= async (req,res)=>{
   const products = await productModel.find();
   //{price:{$gt:500}}
    res.json(products);
 };
 exports.getId = async(req,res)=>{
    // console.log(req.params)
    const id= req.params.id;
    console.log({id})
   //  const product =products.find(p=>p.id===id)
   const product =await productModel.findById(id)
    res.json(product);
 }
 exports.replace = async(req,res)=>{
    // console.log(req.params)
    //  const productIndex =products.findIndex(p=>p.id===id)
    //  products.splice(productIndex,1,{...req.body, id:id})
    const id=  req.params.id;
   try{
    const doc = await productModel.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(doc);
   }
   catch(err){
      console.log(err);
      res.status(400).json(err)
   }
 }
 exports.Update = async(req,res)=>{
    // console.log(req.params)
   //  const id= +req.params.id;
   //  const productIndex =products.findIndex(p=>p.id===id)
   //  const product =products[productIndex];
   //  products.splice(productIndex,1,{...product,...req.body,})
   //  res.status(201).json();
   const id=  req.params.id;
   try{
    const doc = await productModel.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(doc);
   }
   catch(err){
      console.log(err);
      res.status(400).json(err)
   }
 }
 exports.deleteP = async (req,res)=>{
    // console.log(req.params)
   //  const id= +req.params.id;
   //  const productIndex =products.findIndex(p=>p.id===id)
   //  const product =products[productIndex];
   //  products.splice(productIndex,1)
   //  res.status(201).json(product);
   const id=  req.params.id;
   try{
    const doc = await productModel.findOneAndDelete({_id:id})
    res.status(201).json(doc);
   }
   catch(err){
      console.log(err);
      res.status(400).json(err)
   }
 }