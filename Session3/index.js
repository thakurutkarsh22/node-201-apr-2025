const express = require("express");
const homeResponse = require("./Controllers/HomeController");
const userData = require("./usersData");
const { getAllUsers, getUserByGender, getUserByUserName, getUserByUserNameParams } = require("./Controllers/UserActivityController");
const UserActivityRouter = require("./Routes/UserActivityRoutes");
const HomeRouter = require("./Routes/HomeRoutes");
const dotEnv = require("dotenv");

// this line loads all the variable from .env file to process.env 
dotEnv.config()

// process represents whole NODE.js SERVER. , Process is a global variable just like in browser (windows) is.
const ENV_VARIABLES =  process.env;


const server = express();
const PORT = ENV_VARIABLES.PORT;

server.use("/", HomeRouter)


// why keeping your application password in code BAD ? 
const MY_SECRET_PASSWORD = ENV_VARIABLES.MY_SECRET_PASSWORD;



server.use("/api/v1/activity", UserActivityRouter)


server.listen(PORT, () => {
    console.log("THUMBS UP, I am up and running at port number EXPRESS SERVER  ::: " + PORT);
})


// Before total lines 83; 