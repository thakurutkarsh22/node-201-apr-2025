const express = require("express");
const homeResponse = require("./Controllers/HomeController");
const userData = require("./usersData");

const server = express();
const PORT = 8088;

// get -> request method
server.get("/", homeResponse)

server.get("/home", homeResponse)

// use -> it supports every type of method (get, put, post, delete etc..)
server.use("/contact", (req, res) => {
    // send method is also not in NODEJS
    // behind the scenes send is doing 
    // // 1. writing the response
    // 2. ending the response.
    // 3. JSON.stringify is happening behind the scenes
    res.status(200).send("this is a contact express server");
});


server.get("/fitness", (req,res) => {
    const dietchart = {
        name: "utkasrh",
        height: 175,
        weight: 70,
        diet: ["eggs", "protien"],
        address: {
            street: "abc street",
            housenumber: 3233
        },
        shouldSleep8Hours: true,
        createDate: new Date().toDateString(),
    }

    // it send the response in the json format 
    // this cant be done in NODEJS 
    // behind the scenes json -> 1. setting header {"content-type": "application/json"
    // 2. writing the response
    // 3. ending the response.
    res.json(dietchart);
})




// ACTIVIES .... 
// 1. I want to get all the users 
server.get("/api/v1/activity/users", (req, res) => {
    res.json(userData.data);
})

// 2. I want all the female users
// we will use Query params here (ex: https://www.google.com/search?q=sachin    ,   https://www.google.com/search?q=virat) 
server.get("/api/v1/activity/users/search", (req, res) => {
    const query = req.query;
    const searchedGender = query.gender;
    const filteredData = userData.data.filter(user => user.gender === searchedGender )
    res.json(filteredData);
})


// 3. we want data for only 1 user 
// way 1 : Query params

server.get("/api/v1/activity/user", (req, res) => {
    const query = req.query;
    const searchedName = query.name;
    const filteredData = userData.data.filter(user => user.name.first === searchedName );
    res.json(filteredData[0]);
})

// way 2: params (Ex: https://pokeapi.co/api/v2/pokemon/pikachu,     https://pokeapi.co/api/v2/pokemon/ditto)
server.get("/api/v1/activity/user/:userName", (req, res) => {
    const params = req.params;
    const userName = params.userName;
    const filteredData = userData.data.filter(user => user.name.first === userName );
    res.json(filteredData[0]);
})

server.listen(PORT, () => {
    console.log("THUMBS UP, I am up and running at port number EXPRESS SERVER  ::: " + PORT);
})