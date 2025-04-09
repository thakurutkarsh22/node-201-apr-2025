const BlogsModel = require("../Models/Blogs.Model");

async function createNewBLog(req, res) {
    const body = req.body;
    const title = body.title;
    const content = body.content;

    // creation of object (Business logic )

    const blogsObj = BlogsModel({
        title: title,
        content: content,
    })

    // save the obj in DB
    try {
        // this line put thing in DB  (TALKING TO DB)
        const response = await blogsObj.save();
        res.status(201).json(response);
    } catch(error) {
        res.status(400).json(error);
    }
}

async function getAllBlogs(req, res) {

    try {
        // this line put thing in DB 
        const response = await BlogsModel.find({});
        res.status(200).json(response);
    } catch(error) {
        res.status(400).json(error);
    }
}

async function getBlogById(req, res) {
    const params = req.params;
    const id = params.idasdadasdadasda;


    try {
        // this line put thing in DB 
        const response = await BlogsModel.findById(id);
        res.status(200).json(response);
    } catch(error) {
        res.status(400).json(error);
    }
}

async function deleteByID(req, res) {
    const params = req.params;
    const id = params.id;


    try {
        // this line put thing in DB 
        const response = await BlogsModel.deleteOne({_id: id});
        res.status(200).json(response);
    } catch(error) {
        res.status(400).json(error);
    }
}



module.exports = { createNewBLog, getAllBlogs, getBlogById, deleteByID }