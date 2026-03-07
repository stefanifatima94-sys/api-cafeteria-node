const express = require("express")
const app = express()
//Dados
const produtos =[
    {id: 1, nome: "Café", preço: 8,},
    {id: 2, nome: "Capuccino", preço: 10 },
    {id: 3, nome: "Bolo de chocolate", preço: 7 },
    {id: 4, nome: "Bolo de cenoura", preço: 6}
]
app.use(express.json())
//Rotas
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("API da cafeteria funcionando")
})
app.get("/produtos",(req, res) => {
    res.json(produtos)
})

app.get("/produtos/:id",(req, res) => {
    const id = parseInt(req.params.id)

const produto = produtos.find(p => p.id === id)
if(!produto) {
    return
    res.status(404).json({ mensagem: "produto não encontrado" })
}
res.json(produto)
})

app.post("/produtos", (req, res) => {
    const { nome, preço } = req.body
    if(!nome || !preço) {
        return
        res.status(404).json({ mensagem: " nome e preço são obrigatórios"})
    }
    const novoProduto = {
        id: produtos. length + 1,
        nome,
        preço
    }
    produtos.push(novoproduto)

    res.status(201).json(novoproduto)
})
app.delete("/produto/:id", (req,res) => {
    const id = parseInt(req.params.id)
    const index = produtos.findIndex(p =>
        p.id === id)
        if(index === -1){
            return
            res.status(404).json({mensagem: "produto não encontrado" })
        }
        produtos.splice(index, 1)
        res.json({mensagem: "produto removido com sucesso"})
    })
//Servidor
app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})

