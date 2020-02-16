const express = require('express');

const db = require('./data/db-config')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    db.select('*').from('car-dealers')
    .then(dealers => {
        res.status(200).json(dealers)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: "internal server problem, not real sure what's going on"})
    })
})

server.post('/', (req, res) => {
    if (!req.body.model || !req.body.make || !req.body.vin || !req.body.mileage){
        console.log(req.body)
        res.status(400).json({errorMessage: 'you gotta tell me more about all that'})
    }else {
        db('car-dealers').insert(req.body)
     .then(id => {
         console.log('we did it i think, try getting again')
         res.status(201).json({message: 'dealer created successfully'})
     })
     .catch(err => {
         console.log(err)
         res.status(500).json({message: 'there was an error'})
     })
    }
 })

module.exports = server;