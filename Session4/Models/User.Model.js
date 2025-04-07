const { Schema, default: mongoose } = require("mongoose");


const userSchema = new Schema({
    name: {type: String, required: true}
})

module.exports = mongoose.model("users", userSchema);


