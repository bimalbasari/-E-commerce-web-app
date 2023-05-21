import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userScheme = new mongoose.Schema({
    fastname: {
        required: true,
        type: String,
        trim: true,
        min: 3,
        max: 20
    },
    lastname: {
        required: true,
        type: String,
        trim: true,
        min: 3,
        max: 20
    },
    email: {
        required: true,
        type: String,
        trim: true,
        unique: true,
    },
    hash_password: {
        required: true,
        type: String,
        min: 6,
        max: 20
    },
    admin: {
        type: Boolean,
        default: false
    },
    cart: [
        {
            id: {
                type: String,
            },
            quantity: {
                type: Number,
            },
        },
    ],

}, { timestamps: true })

userScheme.virtual("password").set(function (password) {
    this.hash_password = bcrypt.hashSync(password, 10)
});

userScheme.virtual("fullname").get(function () {
    return `${this.fastname} ${this.lastname}`
})


userScheme.methods = {

    Authenticates: function (password) {
        let result = bcrypt.compareSync(password, this.hash_password);
        if (result) { return result }
        else {
            throw new Error('Password  invalid!')
        }


    }
}

const User = mongoose.model("user", userScheme)

export default User;