const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("hello re")
})

//user
//register
app.post("/register", (req, res) => {
    res.send("user register endpoint reached")
})

//login
app.post("/login", (req, res) => {
    res.send("user login endpoint reached")
})

//user feedback
app.post('/feedback', (req, res) => {
    res.send("user feedback endpoint reached")
})

//getting my feedback
app.get('/feedback/me', (req, res) => {
    res.send("my feedback endpoint reached")
})

//admin routes
//get all feedback
app.get('/feedback/all', (req, res) => {
    res.send("admin feedback endpoint reached") 
})

//get one feedback
app.get('/feedback/:id', (req, res) => {
    res.send("admin feedback with id endpoint reached") 
})

//update status
app.put("/feedback/update/:id/status", (req, res) => {
    res.send("admin feedback update endpoint reached") 
})

//enter admin note of feedback
app.post("/feedback/:id/note", (req, res) => {
    res.send("admin feedback note endpoint reached") 
})

//fallback
app.all('/*id', (req, res) => {
    res.send("not available")
})

app.listen(5000, () => {
    console.log("server is running on port 5000")
})