const BlogsModel = require("../Models/Blogs.Model");
const UserModel = require("../Models/User.Model");


// DEPENDENCY INJECTION
class BlogService {
    static async createBlogService(title, content) {
        const blogsObj = BlogsModel({
            title: title,
            content: content,
        })

        // save the obj in DB
        try {
            // this line put thing in DB  (TALKING TO DB)
            const response = await blogsObj.save();
            return response
        } catch(error) {
            return error;
        }
    }



    static async createUser(username, email, name) {

        // this line is part of business logic
        const nationality = "INDIAN";

        // TAKING TO DB 
        const userObj = UserModel({
            username,
            email,
            name,
            nationality
        });

        try {
            // this line put thing in DB  (TALKING TO DB)
            const response = await userObj.save();
            return response 
        } catch(error) {
            return error;
        }
    }


}

module.exports = BlogService;