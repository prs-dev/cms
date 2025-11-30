const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("hello re")
})

app.all('/*id', (req, res) => {
    res.send("not available")
})

app.listen(5000, () => {
    console.log("server is running on port 5000")
})