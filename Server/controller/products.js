
import Product from "../model/ProductSchema.js"
import User from "../model/userSchema.js";

export const getProduct = async (req, res) => {
    // const { token } = req.cookies
    // console.log(token);
    try {
        const product = await Product.find({});
        res.status(200).json({ product })
    } catch (err) {
        res.status(500).json({ message: err })
    }

};

export const addCart = async (req, res) => {
    const { id, quantity } = req.params;
    console.log(id, quantity, "from query");
    const userinfo = res.userInfo;
    try {
        await User.updateOne(
            {
                _id: userinfo._id,
                cart: { $elemMatch: { id: id } }
            },
            {
                $inc: { "cart.$.quantity": parseInt(quantity) }
            }
        );
        // const updatedUser = await User.findById(userinfo._id);
        // res.status(200).json({ cart: updatedUser.cart })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const getProductById = async (req, res) => {

    const { id, quantity } = req.params
    try {
        const product = await Product.findOne({ _id: id });
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ message: err })
    }

}



