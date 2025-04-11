const BlogsModel = require("../Models/Blogs.Model");


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
}

module.exports = BlogService;