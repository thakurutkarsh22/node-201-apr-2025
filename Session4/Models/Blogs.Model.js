const { Schema, default: mongoose } = require("mongoose");


const blogSchema = new Schema({
    title: {type: String, required: true},
    authors: [String],
    content: {type: String, required: true}
})

// blogs is name of collection
module.exports = mongoose.model("Blog", blogSchema);