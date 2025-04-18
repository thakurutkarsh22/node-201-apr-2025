const express = require("express");
const { createNewUser, getAllUser } = require("../Controllers/UserController");

const router = express.Router();



router.post("/create", createNewUser)
router.get("/getAllUser", getAllUser);




module.exports = router;
