const express = require("express");
const homeResponse = require("./Controllers/HomeController");
const userData = require("./usersData");
const { getAllUsers, getUserByGender, getUserByUserName, getUserByUserNameParams } = require("./Controllers/UserActivityController");
const UserActivityRouter = require("./Routes/UserActivityRoutes");
const HomeRouter = require("./Routes/HomeRoutes");
const BlogsRouter = require("./Routes/BlogsRoutes");
const dotEnv = require("dotenv");
const { default: mongoose } = require("mongoose");

// this line loads all the variable from .env file to process.env 
dotEnv.config()

// process represents whole NODE.js SERVER. , Process is a global variable just like in browser (windows) is.
const ENV_VARIABLES =  process.env;


const server = express();
const PORT = ENV_VARIABLES.PORT;


// This server.user will work for EVERY PATH / every request 
// express.json() - body parser
server.use(express.json())



// This server.user will work for "/"
server.use("/", HomeRouter)


// why keeping your application password in code BAD ? 
const MY_SECRET_PASSWORD = ENV_VARIABLES.MY_SECRET_PASSWORD;


// This server.user will work for "/api/v1/activity"
server.use("/api/v1/activity", UserActivityRouter)


// ROUTEER FOR BLOGS 

server.use("/api/v1/blog", BlogsRouter)


// DATABASE CONNECTION
mongoose.connect("mongodb+srv://asdf1234:asdf1234@cluster0.c3u6pt8.mongodb.net/crio").then(data => {
    console.log("DATABASE IS UP");
}).catch(err => {
    console.log("error in connectign database");
})


server.listen(PORT, () => {
    console.log("THUMBS UP, I am up and running at port number EXPRESS SERVER  ::: " + PORT);
})


// Before total lines 83; 