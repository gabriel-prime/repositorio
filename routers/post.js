const express = require('express');
const User = require('../models/user');
const router = express.Router();
const UserController = require('../UserController')


router.post("/cadastrar", async (req, res) => {
    console.log(req.body);

await User.create(req.body)
.then((retorno) => {
    return res.json({
        erro: false,
        mensagem: "Usuário cadastrado com sucesso!"
    })
}).catch((error) => {
    return res.status(400).json({
        erro: true,
        mensagem: "Erro: Usuário cadastrado não com sucesso!"
    })
});


    res.send("Página cadastrar.");
});

router.get("/", (req, res) => {
    res.send("Página inicial.");
});

router.get("/lista", async (req, res)=>{
    const retorno = await UserController.listaUsuarios();
    res.send(retorno)
});


router.get("/umDaLista", async (req, res) => {
    const retorno = await UserController.listaUmUsuario(req.query.name);
    res.send(retorno)
});

router.get("/umDaLista", async (req, res) => {
    const retorno = await UserController.listaUmUsuarioId(req.query.id);
    res.send(retorno)
});

router.put("/reAdicionar/:id", async (req, res) => {
    const retorno = await UserController.readicionar({...req.body, id:req.params.id});
    res.send(retorno)
});

router.get("/letra", async (req, res) => {
    const retorno = await UserController.lerLetra(req.query.name);
    res.send(retorno)
});

router.delete("/deletar/:id", async (req, res) => {
    const retorno = await UserController.deletar({ ...req.body, id: req.params.id });
    res.send(retorno)
});

module.exports = router
 


