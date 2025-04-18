const BlogService = require("../Service/BlogService");
const AuthService = require("../Service/AuthService");
const bcrypt = require("bcrypt");

async function signup(req, res) {

    const body = req.body;
    const name = body.name;
    const username = body.username;
    const email = body.email;
    const password = body.password;

    // hash the password and send it to service 



    const hashedPassword = await encryptPassword(password);

    try {
        const response = await BlogService.createUser(username, email, name, hashedPassword);

        if(response.errorResponse || response.error || response.errors) {
            res.status(400).json(response);
        } else {
            res.status(201).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

async function encryptPassword(password) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

async function login(req, res) {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    try {
        const response = await AuthService.login(username, password);

        if(response.isLogged) {
            res.status(200).json(response)
        } else {
            res.status(403).json({message: "invalid credentials"})
        }
    } catch(error) {
        res.status(500).json({message: "server error"})
    }
}

module.exports = { login, signup }
