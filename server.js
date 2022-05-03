const http = require('http')
const express = require('express');
const app = express()
const User = require('./models/user');
const router = require('./routers/post');
const db = require('./models/db');
const UserController = require('./UserController');
const Friend = require('./models/friend');
const routerAmigo = require('./models/friend');

app.use(express.json());

app.use("/", router);

app.use("/", routerAmigo);

app.listen(8080, () => {
    console.log("Servidor criado na porta 8080: http://localhost:8080")
});

//http.createServer(express).listen(3000, () => console.log("Servidor rodando local na porta 3000"));
