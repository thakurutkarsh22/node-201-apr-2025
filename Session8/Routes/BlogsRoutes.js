const express = require("express");
const { createNewBLog, getAllBlogs, getBlogById, deleteByID } = require("../Controllers/BlogController");

const router = express.Router();

router.post("/createblog", createNewBLog)
router.get("/getallBlogs", getAllBlogs)
router.get("/getByID/:idasdadasdadasda", getBlogById)
router.delete("/delete/:id", deleteByID)


module.exports = router;
