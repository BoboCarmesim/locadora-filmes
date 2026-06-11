const express = require("express")

const generoRoutes = require("./routes/generoRoutes")
const testRoutes = require("./routes/testRoutes")
const filmeRoutes = require("./routes/filmeRoutes")

const app = express()

app.use(express.json())

app.get("/",(req,res) => {
    return res.send("API DA LOCADORA FUNCIONANDO")
})

app.use("/test",testRoutes)
app.use("/generos",generoRoutes)
app.use("filmes",filmeRoutes)

module.exports = app