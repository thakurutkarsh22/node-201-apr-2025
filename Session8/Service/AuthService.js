const UserModel = require("../Models/User.Model");
const bcrypt = require("bcrypt");


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
                const res = await bcrypt.compare(password,userArray[0].password )
                return {
                    isLogged: res
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