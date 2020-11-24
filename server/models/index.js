const mongoose = require("mongoose")

mongoose.set("debug", true)
mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://ferhkuku:PHYd4T5m3tXIPJgt@cluster0.whffu.mongodb.net/bd_vote?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true  })


module.exports.User = require("./user")
module.exports.Poll = require("./poll")
