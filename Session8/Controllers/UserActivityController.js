const userData = require("../usersData");

const MY_SECRET_PASSWORD = "asdf1234"

function getAllUsers (req, res) {
    res.json(userData.data);
}

function getUserByGender (req, res) {
    const query = req.query;
    const searchedGender = query.gender;
    const filteredData = userData.data.filter(user => user.gender === searchedGender )
    res.json(filteredData);
}

function getUserByUserName (req, res)  {
    const query = req.query;
    const searchedName = query.name;
    const filteredData = userData.data.filter(user => user.name.first === searchedName );
    res.json(filteredData[0]);
}

function getUserByUserNameParams (req, res) {
    const params = req.params;
    const userName = params.userName;
    const filteredData = userData.data.filter(user => user.name.first === userName );
    res.json(filteredData[0]);
}


module.exports = {getAllUsers, getUserByGender, getUserByUserName, getUserByUserNameParams};