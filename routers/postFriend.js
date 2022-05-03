const express = require('express');
const Friend = require('../models/friend');
const User = require('../models/user');
const router = express.Router();
const FriendController = require('../FriendController');


router.post("/cadastrarAmigo", async (req, res) => {
    console.log(req.body);

    await Friend.create(req.body)
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


    res.send("Página cadastrar amigo.");
});

router.get("/listaAmigo", async (req, res) => {
    const retorno = await FriendController.listaUsuarios();
    res.send(retorno)
});


router.get("/umDaListaAmigo", async (req, res) => {
    const retorno = await FriendController.listaUmUsuario(req.query.name);
    res.send(retorno)
});

router.get("/umDaListaAmigo", async (req, res) => {
    const retorno = await FriendController.listaUmUsuarioId(req.query.id);
    res.send(retorno)
});

router.put("/reAdicionarAmigo/:id", async (req, res) => {
    const retorno = await FriendController.readicionar({ ...req.body, id: req.params.id });
    res.send(retorno)
});

router.get("/letraAmigo", async (req, res) => {
    const retorno = await FriendController.lerLetra(req.query.name);
    res.send(retorno)
});

router.delete("/deletarAmigo/:id", async (req, res) => {
    const retorno = await FriendController.deletar({ ...req.body, id: req.params.id });
    res.send(retorno)
});

module.exports = router