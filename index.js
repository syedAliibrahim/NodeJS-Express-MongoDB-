const http =require('http')

const fs =require('fs')
const index =fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
const products =data.products;

const express =require('express')
const server =express();


///body Parser 
server.use(express.json());
server.use(express.static('public'))


//// Products
///API ROOT , Base URL, example-GOOGLE.COM/API/V2

///create product //produnct     /// C R U D
server.post('/products',(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.json(req.body)
 })

// Read Get /product
server.get('/products',(req,res)=>{
   res.json(products)
})

///// Read Get /product /:ID
server.get('/products/:id',(req,res)=>{
    // console.log(req.params)
    const id= +req.params.id;
    const product =products.find(p=>p.id===id)
    res.json(product)
 })

 //// Update PUT /product /:ID
server.put('/products/:id',(req,res)=>{
    // console.log(req.params)
    const id= +req.params.id;
    const productIndex =products.findIndex(p=>p.id===id)
    products.splice(productIndex,1,{...req.body, id:id})
    res.status(201).json();
 })

 //// Update PATCH /product /:ID
server.patch('/products/:id',(req,res)=>{
    // console.log(req.params)
    const id= +req.params.id;
    const productIndex =products.findIndex(p=>p.id===id)
    const product =products[productIndex];
    products.splice(productIndex,1,{...product,...req.body,})
    res.status(201).json();
 })

 /// Delete DELETE /product /:ID
server.delete('/products/:id',(req,res)=>{
    // console.log(req.params)
    const id= +req.params.id;
    const productIndex =products.findIndex(p=>p.id===id)
    const product =products[productIndex];
    products.splice(productIndex,1)
    res.status(201).json(product);
 })

 server.put('/',(req,res)=>{
    res.json({type:'PUT'})
 })
 server.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
 })
 server.patch('/',(req,res)=>{
    res.json({type:'PATCH'})
 })



// server.get('/',(req,res)=>{

//     // res.sendStatus(404);
//     // res.json(product)
//     // res.send('get res hello')
//     // res.sendFile('file:///C:/Users/Dell/Desktop/contourText/nodejs/index.html')
// })












server.listen(8080,()=>{
    console.log('server started')
})
















// const server =http.createServer((req,res)=>{
    
//     console.log(req.url);
//     console.log('server started')
//     res.setHeader('dummy','DummyValue');
//     // res.setHeader('Content-Type','text/html')
//     res.setHeader('Content-Type','application/json');

//     res.end(data);
// })

// server.listen(8080)