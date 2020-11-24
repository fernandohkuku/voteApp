const router = require("express").Router()
const handdle = require("../handlers")


router.post("/register", handdle.register)

router.post("/login", handdle.login)


module.exports = router