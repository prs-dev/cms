const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: {
        type: String,
        enum: ["Service", "Billing", "Staff", "Other"],
        default: "Other"
    },
    status: {
        type: String,
        default: "submitted"
    },
    attachmentUrl: {
        type:String,
        default: ""
    },
    adminNotes: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Feedback", feedbackSchema)