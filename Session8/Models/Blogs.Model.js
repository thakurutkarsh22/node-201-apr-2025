const { Schema, default: mongoose } = require("mongoose");
const validator = require('validator');

// bloom fliter (its yours to read)...
const blogSchema = new Schema({
    title: {type: String, required: true, 
        unique: true, 
        minlength: 5, maxlength: 100, validate: (data) => validator.isAlphanumeric(data) },
    authors: [String],
    content: {type: String, required: true}
})

// blogs is name of collection
module.exports = mongoose.model("blogs", blogSchema);