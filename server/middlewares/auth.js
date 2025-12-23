const jwt = require("jsonwebtoken")
const validToken = (req, res, next) => {
    const token = req?.headers?.authorization?.split(" ")[1]
    // console.log('token', token)
    const validity = jwt.verify(token, process.env.SECRET)
    if (!validity) {
        return res.status(400).json({
            error: true,
            msg: "invalid token!"
        })
    }
    // console.log("validity", validity)
    req.userId = validity._id
    req.userRole = validity.role
    next()
}

const isAdmin = (req, res, next) => {
    if (req.userRole !== "admin") {
        return res.status(401).json({
            error: true,
            msg: "You are not authorized !"
        })
    }
    next()
}

module.exports = {
    validToken,
    isAdmin
}