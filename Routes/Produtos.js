const express = require("express")
const router = express.Router()
//dados
const produtos = [
    {id: 1, nome: "Café", preco: 8,},
    {id: 2, nome: "Capuccino", preco: 10 },
    {id: 3, nome: "Bolo de chocolate", preco: 7 },
    {id: 4, nome: "Bolo de cenoura", preco: 6}
]
router.get("/",(req, res)  => {
    res.json(produtos)
})
router.get("/:id",(req, res) => {
    const id = parseInt(req.params.id)
    const produto = produtos.find(p => p.id === id)

    if (!produto) {
        return res.status(404).json({ mensagem: "produto não encontrado"})
    }
    res.json(produto)
})
router.post("/",(req, res) => {
    const {nome, preco} = req.body
    if (!nome || preco == null) {
        return res.status(400).json({ mensagem: "nome e preco são obrigatorios"})
    }
const novoProduto = {
    id: produtos.length + 1,
    nome,
    preco
}
produtos.push(novoProduto)
res.status(201).json(novoProduto)
})
router.put("/:id",(req, res) => {
    const id = parseInt(req.params.id)
    const produto = produtos.find(p => p.id === id)
    if(!produto) {
        return res.status(404).json({ mensagem: "produto não encontrado"})
    }
    const {nome, preco } = req.body
    if(!nome || preco == null) {
        return res.status(400).json({ mensagem:"nome e preco são obrigatórios"})
    }
    produto.nome = nome
    produto.preco = preco
    res.json(produto)
})
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const index = produtos.findIndex(p => p.id === id)
    if (index === -1) {
        return res.status(404).json({ mensagem: "produto não encontrado"})
    }
    produtos.splice(index, 1)
    res.json({mensagem: " produto removido com sucesso"})
})
module.exports = router
