const fs =require('fs')
// const index =fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
const products =data.products;
const productModel = require("..model/product")

exports.create= (req,res)=>{
    console.log(req.body);
    // products.push(req.body);
    const objToSend =req.body;
    productModel.create(objToSend,(err, data)=>{
        if(err){
            res.send(`internal error: ${err}`)
        }else{
            res.send("user successfully create");
        }
    })
    res.json(req.body)
 }
 exports.getAll= (req,res)=>{
    res.json(products)
 }
 exports.getId =(req,res)=>{
    // console.log(req.params)
    const id= +req.params.id;
    const product =products.find(p=>p.id===id)
    res.json(product)
 }
 exports.replace =(req,res)=>{
    // console.log(req.params)
    const id= +req.params.id;
    const productIndex =products.findIndex(p=>p.id===id)
    products.splice(productIndex,1,{...req.body, id:id})
    res.status(201).json();
 }
 exports.Update = (req,res)=>{
    // console.log(req.params)
    const id= +req.params.id;
    const productIndex =products.findIndex(p=>p.id===id)
    const product =products[productIndex];
    products.splice(productIndex,1,{...product,...req.body,})
    res.status(201).json();
 }
 exports.deleteP = (req,res)=>{
    // console.log(req.params)
    const id= +req.params.id;
    const productIndex =products.findIndex(p=>p.id===id)
    const product =products[productIndex];
    products.splice(productIndex,1)
    res.status(201).json(product);
 }