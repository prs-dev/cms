const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("./models/user.model")
const mongoose = require("mongoose")
const Feedback = require("./models/feedback.model")
const { validToken, isAdmin } = require("./middlewares/auth")
require('dotenv').config()

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello re")
})

//user
//register
app.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                error: true,
                msg: "Fields are missing!"
            })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                error: true,
                msg: "User already exists!",
            })
        }
        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            name, email, password: hashedPassword, role
        })
        await newUser.save()
        return res.status(201).json({
            error: false,
            msg: "User created!",
            user: newUser
        })
    } catch (error) {
        console.log("error in register endpoint", error)
    }
})

//login
app.post("/login", async (req, res) => {
    // res.send("user login endpoint reached")
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                error: true,
                msg: "fields missing!"
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                error: true,
                msg: "user not found!"
            })
        }
        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            return res.status(400).json({
                error: true,
                msg: "invalid credentials!"
            })
        }
        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.SECRET)
        // console.log("test", matchPassword)  
        return res.status(200).json({
            error: false,
            msg: "user found!",
            token
        })
    } catch (error) {
        console.log("error in login endpoint", error)
    }
})

//user feedback //auth route
app.post('/feedback', validToken, async (req, res) => {
    try {
        // res.send("user feedback endpoint reached")
        // console.log("user", req.userId)
        // console.log("testing", req)
        const { title, description, category, status, attachmentUrl, adminNotes } = req.body
        if (!title || !description) {
            return res.status(400).json({
                error: true,
                msg: "please provide all the fields!"
            })
        }
        const newFeedback = new Feedback({
            title,
            description,
            category,
            status,
            attachmentUrl,
            adminNotes,
            user: req.userId
        })
        await newFeedback.save()
        //save this feedback in user endpoint too
        const user = await User.findOne({_id: req.userId})
        user.feedbacks = [...user.feedbacks, newFeedback._id]
        await user.save()
        return res.status(201).json({
            error: false,
            msg: "Feedback registered!"
        })
    } catch (error) {
        console.log("error in feedback endpoint")
    }
})

//getting my feedback //auth route
app.get('/feedback/me', validToken, async(req, res) => {
    //two ways
    try {
        //one way -- using user feedback array
        // const user = await User.findById(req.userId).populate("feedbacks")
        //second way == using feedback user field
        const feedbacks = await Feedback.find({user: req.userId})
        console.log("feedbacks", feedbacks)
        // console.log("user", user)   
        // return res.status(200).json({
        //     error: true,
        //     msg: "feedbacks retrieved",
        //     feedbacks: user.feedbacks
        // })  
        return res.status(200).json({
            error: false,
            msg: "feedbacks retrieved",
            feedbacks
        })    
    } catch (error) {
        console.log("error in feedback me endpoint")
    }
    res.send("my feedback endpoint reached")
})

//admin routes
//get all feedback
app.get('/feedback/all', validToken, isAdmin, async (req, res) => {
    try {
        const allFeedbacks = await Feedback.find()
        return res.status(200).json({
            error: false,
            msg: "fetched feedbacks",
            feedbacks: allFeedbacks
        })
        // res.send("admin feedback endpoint reached")
    } catch (error) {
        console.log("error in feedback/all")
    }
})

//get one feedback
app.get('/feedback/:id', validToken, isAdmin, async(req, res) => {
    try {
        const feedbackId = req.params.id
        const feedback = await Feedback.findById(feedbackId)
        console.log("feedback", feedback)
        if(!feedback) return res.status(400).json({
            error: true,
            msg: "feedback not found!"
        })
        return res.status(200).json({
            error: false,
            msg: "feedback retrieved",
            feedback
        })
        // console.log("feedbackId", feedbackId)        
    } catch (error) {
        console.log("error in feedback/:id", error)
    }
    // res.send("admin feedback with id endpoint reached")
})

//update status
app.put("/feedback/update/:id/status", validToken, isAdmin, async(req, res) => {
    const feedbackId = req.params.id
    try {
        const feedback = await Feedback.findByIdAndUpdate(feedbackId, req.body, {new: true})
        if(!feedback) return res.status(400).json({
            err: true,
            msg: "not found!"
        })
        return res.status(200).json({
            err: false,
            msg: "feedback updated",
            feedback
        })
    } catch (error) {
        console.log("error in status update endpoint", error)
    }
    // console.log("feedback", feedbackId)
    // res.send("admin feedback update endpoint reached")
})

//enter admin note of feedback
app.post("/feedback/:id/note", validToken, isAdmin, async(req, res) => {
    try {
        const feedbackId = req.params.id
        const feedback = await Feedback.findById(feedbackId)
        if(!feedback) return res.status(400).json({err: true,
            msg: "not found"
        })
        feedback.adminNotes = [...feedback.adminNotes, req.body.note]
        await feedback.save()
        return res.status(200).json({
            err: true,
            msg: "updated successfully",
            feedback
        })
    } catch (error) {
        console.log("error in update note endpoint", error)
    }
    // res.send("admin feedback note endpoint reached")
})

//fallback
app.all('/*id', (req, res) => {
    res.send("not available")
})

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("mongo db connected!")
    })
    .catch(err => console.log("error connecting mongodb", err))

app.listen(5000, () => {
    console.log("server is running on port 5000")
})

//connect mongodb and then test register endpoint