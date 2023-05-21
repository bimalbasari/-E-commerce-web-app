import mongoose from "mongoose";



const ProductSchema = new mongoose.Schema({
     
    url: { type: String, required: true },
    detailUrl: { type: String, required: true },
    title: {
        shortTitle: { type: String, required: true },
        longTitle: { type: String, required: true },
    },
    price: {
        mrp: { type: Number, required: true },
        cost: Number,
        discount: String
    },
    quantity: Number,
    description: String,
    discount: String,
    tagline: String


});


const Product = mongoose.model("product", ProductSchema);

export default Product;