const moongose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new moongose.Schema({
    username:{
        type:String, 
        required:true, 
        unique:true
    },
    password:{
        type:String, 
        required:true,
    },
    created:{
        type:Date,
        default:Date.now
    },
    polls:[{type:moongose.Schema.Types.ObjectId, ref:"Poll"}]
})


userSchema.pre("save", async function(next){
    try{
        if(!this.isModified("password")){
            return next()
        }
        const hash = await bcrypt.hash(this.password, 10)
        this.password = hash
        return next()
    }catch(err){
        return next(err)
    }
})

userSchema.methods.comparePassword = async function(attempt, next){
    try{
        return await bcrypt.compare(attempt, this.password)
    }catch(err){
        next(err)
    }
}

module.exports = moongose.model("User", userSchema)