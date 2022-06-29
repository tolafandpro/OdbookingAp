const mongoose = require('mongoose');
const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config();
const authRoute = require('./routes/auth');
const roomsRoute = require('./routes/rooms');
const usersRoute = require('./routes/users');

async function dbConnection() {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    } catch (error) {
        throw error
    }
}

    //Middleware section
app.use("/api/auth", authRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

// .then(() => console.log('Connected to Mongo-exercises database'))
// .catch((err) => console.log('Unable to connect', err ))


const port = process.env.PORT || 8800;

app.listen(port, () => { 
    dbConnection()
    console.log("app is listen to port 8800")});