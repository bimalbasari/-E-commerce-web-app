import jwt from "jsonwebtoken";
import User from "../model/userSchema.js";
import dotenv from "dotenv"; 
import cookieParser from 'cookie-parser';

dotenv.config();

export const userSignup = async (req, res) => {
    try {
        //  find if user alrady register
        const exit = await User.findOne({ email: req.body.email });
        if (exit) return res.status(401).json({ message: "User alredy exit" })

        // if user not exit then add new user  
        const user = req.body
        const newUser = new User(user);
        await newUser.save();

        const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET)
        const { fullname, _id, email, fastname } = newUser;

        return res
        .status(201)
        .json({
            token:token,
          user: { _id, email, fastname, fullname }
        });

    } catch (err) {
        res.status(500).json({ message: `back end${err.message}` });
    }
}


export const userSignin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            if (user.Authenticates(req.body.password)) {
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
                const { fullname, _id, email, fastname } = user;
                res.status(201).json({
                    token:token,
                  user: { _id, email, fastname, fullname }
                });
            }
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}

