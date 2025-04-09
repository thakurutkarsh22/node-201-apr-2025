const express = require("express");
const { getUserByGender, getUserByUserName, getUserByUserNameParams, getAllUsers } = require("../Controllers/UserActivityController");
const AuthMiddleware = require("../Middleware/AuthMiddleware");

const router = express.Router();



router.get("/users", AuthMiddleware, getAllUsers)
router.get("/users/search", AuthMiddleware, getUserByGender);
router.get("/user", getUserByUserName);
router.get("/user/:userName", getUserByUserNameParams);




module.exports = router;
