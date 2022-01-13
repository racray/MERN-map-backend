const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require('cors');
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

dotenv.config();
// useCreateIndex: true,
app.use(cors());
app.use(express.json());

mongoose 
 .connect("mongodb+srv://Rayed:welcome123@cluster0.ufzzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
           })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});