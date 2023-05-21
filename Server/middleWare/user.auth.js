import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const fetchUser = async (req, res, next) => {
    const token = req.header("Authorization").split(" ")[1];
    if (!token) res.status(401).json({ error: "Please login/signup" })
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET)
        if (data) {
            res.userInfo = data
            next()
        } else {
            throw new Error('Please authentiacte using a valid token!')
        }
    } catch (err) {
        console.log("Jwt-Error",err.message)
    }
}