const jwt = require("jsonwebtoken")


module.exports = (req, res, next) => {
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, process.env.SECRET, (err, decode)=>{
            if(err){
                next(Error("Failed to authenticate token"))
            }else{
                req.decode = decode
                next()
            }
        })

    }else{
        next(Error("No token provider"))
    }
}