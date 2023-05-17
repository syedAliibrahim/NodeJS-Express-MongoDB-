const express =require('express')
const productController =require('../controller/product')
const router =express.Router();

router

//// Products
///API ROOT , Base URL, example-GOOGLE.COM/API/V2
///create product //produnct     /// C R U D
 .post('/',productController.create)
// Read Get /product
  .get('/',productController.getAll)
///// Read Get /product /:ID
  .get('/:id',productController.getId)
 //// Update PUT /product /:ID
  .put('/:id',productController.replace)
 //// Update PATCH /product /:ID
  .patch('/:id', productController.Update)
 /// Delete DELETE /product /:ID
  .delete('/:id',productController.deleteP);

  exports.router =router;
