const express = require('express');
const rotas = require('./rotas');
const cors = require('cors')
const app = express();

require('dotenv').config()

app.use(express.json());
app.use(cors())
app.use(rotas)

const porta = process.env.PORT || 3000 
app.listen(porta,()=>console.log (`Servido rodando no endereço http://localhost:${porta}`));