//importing the required module

import express from "express";
import cors from "cors";
import { mongoConnect } from "./src/config/MangoConnection.js";

const app = express();
app.use(cors());
//assigning the port number to the server
const PORT = 8090;

///using midddleware
app.use(express.json());
// listening server to the port
app.listen(PORT, (error) => {
  error && console.log(error.message);
  console.log("your server is running at http://localhost:${PORT}");
});

//get methods

app.get("/", (req, res) => {
  res.json({
    status: "sucess",
    message: "your server is running healthy",
  });
});

//connet DB to server
mongoConnect();
