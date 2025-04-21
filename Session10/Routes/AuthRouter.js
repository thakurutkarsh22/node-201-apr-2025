const express = require("express");
const { signup, login } = require("../Controllers/AuthController");
const UserModel = require("../Models/User.Model");
// const AuthMiddleware = require("../Middleware/AuthMiddleware");

const passport = require("passport");
const AuthMiddleware = passport.authenticate("jwt", { session: false, failureRedirect: "/login" })


const router = express.Router();



router.post("/signup", signup)
router.post("/login", login);
router.get("/getUsers",AuthMiddleware,  async (req, res) => {
    const results = await UserModel.find({});
    res.json(results);
})




module.exports = router;
