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

/**
 * @To run this project, follow these steps:
 * 
 * 1. Create a .env file in the project's root directory.
 * 2. Add the following environment/config variables in the .env file:
 *    - PORT=3000
 *    - USER=<yourClusterUserName>
 *    - PASSWORD=<yourClusterPassword>
 *    - JWT_SECRET=bimalbasaricapstoneprojectjwtsecret
 * 3. Save the .env file.
 * 4. Open the terminal and navigate to the project's root directory.
 * 5. Run the command "npm install" to install the project dependencies.
 * 6. Once the dependencies are installed, run the command "npm start" to start the project.
 * 7. Access the application in your web browser using the provided URL.
 */

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
  DefaultData()
  console.log(`Server is running at http://localhost:${PORT}`);
})

