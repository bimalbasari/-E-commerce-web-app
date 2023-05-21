import { products } from "./constant/products.js";
import Product from "./model/ProductSchema.js";
import mongoose from "mongoose";

const DefaultData = async () => {

    try {
        await Product.insertMany(products)

        console.log("Data import sucessfully", products.length)
    } catch (error) {
        console.error(`Error: ${error.message} `)
    }


}

export default DefaultData;