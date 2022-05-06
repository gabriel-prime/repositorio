const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./router/userRoute')
const User = require('./models/user')
const Friend = require('./models/friend')
require('./models/db')

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(8080, () => {
    console.log("Servidor criado na porta 8080: http://localhost:8080")
});