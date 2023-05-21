import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import Connection from "./model/dbConnection.js";
import DefaultData from "./default.js";
import router from "./routes/routes.js";
import cookieParser from 'cookie-parser';
import bodyParser from "body-parser";


dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
Connection(process.env.USER, process.env.PASSWORD)



app.use(express.json());
// app.use(bodyParser())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with the client URL
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });
app.use("/", router)

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})
// DefaultData()
