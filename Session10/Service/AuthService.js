const UserModel = require("../Models/User.Model");
const bcrypt = require("bcrypt");
const JWT_KEY = "askjdhaskldjahslkfjdh123412l3kj12hkj3";
const jwt = require("jsonwebtoken");

class AuthService {
    static async login(username, password) {

        const loginResponse = {
            isLogged: false
        }

        try {

            const userArray =  await AuthService.findUserByUsername(username);
            console.log(userArray, 'userArray');

            if(!userArray || !userArray.length) {
                return loginResponse; 
            } else {
                const res = await bcrypt.compare(password,userArray[0].password ) // true means we are coorect with password
                console.log("res", res);

                // JWT TOKEN 
                let token = "";
                if(res) {
                    token = jwt.sign({ username: username }, JWT_KEY, {
                        expiresIn: "100000ms"
                    } )
                }

                return {
                    isLogged: res,
                    token
                }
            }

        } catch(error) {
            return {
                isLogged: false
            }
        }

    }


    static async findUserByUsername(username) {
        const user = await UserModel.find({username : username});
        return user;
    }



}

module.exports = AuthService;