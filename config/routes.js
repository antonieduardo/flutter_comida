const express = require('express')
const routes = express.Router()

let db = [
    { '1': {Nome: 'Cliente 1', Idade: '20'} }
]

//buscar dados 
routes.get('/', (req, res) => {
    return res.json(db)
})

routes.post('/add', (req, res) =>{
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
        return res.json(body)
})

module.exports = routes