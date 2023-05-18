const mongoose = require("mongoose");

const productSchema= new Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    brand:String,
    category: String,
    thumbnail: String ,
    images: [ String]
})
const ProductModel = mongoose.model("Product", productSchema);

Model.exports = ProductModel