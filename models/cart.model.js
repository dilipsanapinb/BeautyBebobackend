const mongoose=require("mongoose");

const cartSchema=mongoose.Schema({
name:String,
price:Number,
discount:String,
image_url: String,
type:String,
userID:String
})

const CartModel=mongoose.model("cart",cartSchema);

module.exports={CartModel}