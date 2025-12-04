const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['user', "admin"],
        required: true
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model("User", userSchema)