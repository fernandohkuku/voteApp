require("dotenv").config()
const express = require("express")

const cors = require("cors")

const bodyParser = require("body-parser")


const handdle  = require("./handlers")

const routes = require("./routes")

const port = process.env.PORT

const app = express()

app.use(cors())
app.use(bodyParser.json())


app.get("/", (req, res)=>res.json({message:"Hello dudes"}))

app.use("/api/auth", routes.auth)
app.use("/api/polls", routes.poll)

app.use(handdle.notFound)
app.use(handdle.errorHandler)

app.listen(port, console.log(`Server started on port ${port}`))