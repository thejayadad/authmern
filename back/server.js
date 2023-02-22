const express = require("express");
const app = express();


const mongoose = require("mongoose");

require('dotenv').config();
const cors = require("cors");
const User = require("./models/User.js");



app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;


require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', true);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get("/", (req, res) => {
    res.send({
        message: "success"
    })
})

app.post("/register", async (req, res) => {
    const {username, password} = req.body;
    await User.create({username, password});
    res.json({
        message: "success",
    })
})

app.listen(5000, () => {
    console.log("We are going on the port")
})