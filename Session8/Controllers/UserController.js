const BlogService = require("../Service/BlogService");
const { UserInputSchema } = require("../Validator/UserValidation");

// its signup only 
async function createNewUser(req, res) {
    const body = req.body;
    const name = body.name;
    const username = body.username;
    const email = body.email;
    const password = body.password;


    // OLD TYPE OF VALIDATIOIN 
    // if(!name || !username || !email) {
    //     res.status(404).send("please have name")
    // } else if (!)

    // NEW TYPE OF VALIDATION 

    const {error, value} = UserInputSchema.validate(body);
    if(error) {
        res.status(400).json({message: "please give the right schema", error})
        return;
    }



    try {
        const response = await BlogService.createUser(username, email, name, password);

        if(response.errorResponse || response.error || response.errors) {
            res.status(400).json(response);
        } else {
            res.status(201).json(response);
        }
        
    } catch (error) {
        res.status(400).json(error);
    }
}

async function getAllUser(req, res) {

    try {
        // this line put thing in DB 
        const response = await BlogsModel.find({});
        res.status(200).json(response);
    } catch(error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createNewUser,
    getAllUser
}