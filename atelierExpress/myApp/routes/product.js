const express = require('express')
const route=express.Router()
const products=require('../products.json')
p=products
  const productObject = JSON.parse(
    ` {
        "MACBOOKPRO":{
            "name":"Macbook Pro",
            "manufacturer":"Apple",
            "price":1299,
            "stock":32,
            "options":["Intel core i5","Retina Display","Long life battery"]
        },
        "MACBOOKAIR":{
            "name":"Macbook Pro Air",
            "manufacturer":"Apple",
            "price":1099.99,
            "ultrabook":true,
            "stock":112,
            "options":["Intel core i7","SSD","Long life battery"]
        },
         "LENOVOX2300":{
            "name":"Thinkpad x230",
            "manufacturer":"Lenovo",
            "price":1099.99,
            "ultrabook":true,
            "stock":0,
            "options":["Intel core i5","SSD","Long life battery"]
        }	
    }`
  );
  const productsMap = new Map(Object.entries(productObject)); 
//let map = new Map(JSON.parse(products.toString()));
 route.get('/get', function(req, res, next) {
    console.log(products) 
    res.send(products);
  });
  //1ere methode 
  //route.get('/get/:id', function(req, res, next) {
  //  i=req.params.id.toString()
  // res.send(productsMap.get(i))
  //});

  //2eme methode 
  route.get('/:id', function(req, res, next) {
    res.json(products[req.params.id]);
  }); 

  
  route.get('/get/:id/:qt', function(req, res, next) {
    i=req.params.id.toString()
        totalprice=req.params.qt * productsMap.get(i).price
        s=JSON.stringify({ id:req.params.id,price:products.MACBOOKPRO.price,qt:req.params.qt,total:totalprice})
        res.send(s)  
   });
   route.get('/instock/:qt',function(req,res,next){
       List=[]
    for (const [key, value] of productsMap.entries()) {
        if(value.stock>req.params.qt)
        {
          List.push(value)
        }
      } 
      res.send(List)
   })
   for (const [key, value] of productsMap.entries()) {
    console.log(value);
  }
  
  
  console.log(productsMap.keys());
  console.log(productsMap.values());
  module.exports=route ;