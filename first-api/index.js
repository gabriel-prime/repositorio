const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const User = require('./models/usuarios')
const Friend = require('./models/amigos')
require('./mysql')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use("/", routes)

app.listen(3000,() =>{
    console.log('API funcionando em http://localhost:3000')
})
