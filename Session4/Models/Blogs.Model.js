const { Schema, default: mongoose } = require("mongoose");


const blogSchema = new Schema({
    title: {type: String, required: true},
    authors: [String],
    content: {type: String, required: true}
})

module.exports = mongoose.model("blogs", blogSchema);