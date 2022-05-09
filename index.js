//os pacotes
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

//a rota e modelagem
const router = require('./router/userRoute');
const User = require('./models/user');
const Friend = require('./models/friend');
require('./models/db');

//usar os pacotes
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/", router);

//abre o servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor criado na porta ${process.env.PORT}: http://localhost:${process.env.PORT}"`)
});