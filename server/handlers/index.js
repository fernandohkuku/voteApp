
module.exports = {
    ...require("./auth"),
    ...require("./poll")
}


module.exports.notFound = (req, res, next) =>{
    const err = new Error("Not found")
    err.status = 400
    next(err)
}

module.exports.errorHandler = (err, req, res, next) =>{
    res.status(err.status || 500).json({
        message:err.message || "Something went wrong"
    })
}