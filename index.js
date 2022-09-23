
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

const router = require('./src/router/userRoute')
const router2 = require('./src/router/companyRoute')
const router3 = require('./src/router/positionRoute')
const router4 = require('./src/router/worksForRoute')
const User = require('./src/models/user')
const Friend = require('./src/models/friend')
const Company = require('./src/models/company')
const Position = require('./src/models/position')
const WorksFor = require('./src/models/worksFor')
require('./src/models/db')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/", router);
app.use("/", router2);
app.use("/", router3);
app.use("/", router4);


//abre o servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor criado na porta ${process.env.PORT}: http://localhost:${process.env.PORT}"`)

});

// testezinho do git