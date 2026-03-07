const express = require("express")
const app = express()

const produtosRoutes = require("./routes/produtos")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("API da cafeteria funcionando")
})

app.use("/produtos", produtosRoutes)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})