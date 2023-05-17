const fs =require('fs')
// const index =fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
const users =data.users;

exports.create= (req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json(req.body)
 }
 exports.getAll= (req,res)=>{
    res.json(users)
 }
 exports.getId =(req,res)=>{
    // console.log(req.params)
    const id= +req.params.id;
    const user =users.find(p=>p.id===id)
    res.json(user)
 }
 exports.replace =(req,res)=>{
    // console.log(req.params)
    const id= +req.params.id;
    const userIndex =users.findIndex(p=>p.id===id)
    users.splice(userIndex,1,{...req.body, id:id})
    res.status(201).json();
 }
 exports.Update = (req,res)=>{
    // console.log(req.params)
    const id= +req.params.id;
    const userIndex =users.findIndex(p=>p.id===id)
    const user =users[userIndex];
    users.splice(userIndex,1,{...user,...req.body,})
    res.status(201).json();
 }
 exports.deleteP = (req,res)=>{
    // console.log(req.params)
    const id= +req.params.id;
    const userIndex =users.findIndex(p=>p.id===id)
    const user =users[userIndex];
    users.splice(userIndex,1)
    res.status(201).json(user);
 }