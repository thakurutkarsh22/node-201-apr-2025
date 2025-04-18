const express = require("express");
const UserActivityRouter = require("./Routes/UserActivityRoutes");
const HomeRouter = require("./Routes/HomeRoutes");
const BlogsRouter = require("./Routes/BlogsRoutes");
const UserRouter = require("./Routes/UserRoute");
const AuthRouter = require("./Routes/AuthRouter");
const dotEnv = require("dotenv");
const { default: mongoose } = require("mongoose");
var cors = require('cors')



dotEnv.config()
const ENV_VARIABLES =  process.env;


const server = express();
const PORT = ENV_VARIABLES.PORT;

server.use(cors()); // this only will make sure that MY server accept any requst from anywhere in the world 
server.use(express.json())


server.use("/", HomeRouter)
server.use("/api/v1/activity", UserActivityRouter)
server.use("/api/v1/blog", BlogsRouter)

server.use("/api/v1/user", UserRouter);



server.use("/api/v1/auth", AuthRouter)


mongoose.connect("mongodb+srv://asdf1234:asdf1234@cluster0.c3u6pt8.mongodb.net/crio").then(data => {
    console.log("DATABASE IS UP");
}).catch(err => {
    console.log("error in connectign database");
})


server.listen(PORT, () => {
    console.log("THUMBS UP, I am up and running at port number EXPRESS SERVER  ::: " + PORT);
})
