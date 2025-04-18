const express = require("express");
const homeResponse = require("../Controllers/HomeController");
const router = express.Router();



router.get("/", homeResponse);
router.get("/home", homeResponse);
router.get("/fitness", (req,res) => {
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
});
router.get("/contact", (req, res) => {
    res.status(200).send("this is a contact express server");
});






module.exports = router;
