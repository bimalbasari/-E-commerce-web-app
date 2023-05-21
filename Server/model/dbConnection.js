import mongoose from "mongoose";
import 'colour-console';


const Connection = async (user, password) => {
    const URI = `mongodb+srv://${user}:${password}@cluster0.p8by3ki.mongodb.net/E_commerce`
    try {
        await mongoose.connect(URI)
        console.log("Database Connected Succesfully")
    } catch (error) {
        console.error(`Error: ${error.message} `);
    }


}
export default Connection;