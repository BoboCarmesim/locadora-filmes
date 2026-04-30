const express = require("express")

const app = express()

app.use(express.json())

app.get("/",(req,res) => {
    return res.send("API DA LOCADORA FUNCIONANDO")
})

module.exports = app