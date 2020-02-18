const express = require('express');
const cors = require("cors");
const db = require('./data/db-config')

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    db.select('*').from('cars')
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
        db('cars').insert(req.body)
     .then(id => {
         console.log('we did it i think, try getting again')
         res.status(201).json({message: 'car created successfully'})
     })
     .catch(err => {
         console.log(err)
         res.status(500).json({message: 'there was an error'})
     })
    }
 })

 server.put('/:id', (req, res) => {

    if (!req.body.model || !req.body.make || !req.body.vin || !req.body.mileage){
        console.log(req.body)
        res.status(400).json({errorMessage: 'you gotta tell me more about all that'})
    }else {
        db('cars').select('*').where({id: req.params.id}).update(req.body)
     .then(id => {
         console.log('we did it i think, try getting again')
         res.status(200).json(req.body)
     })
     .catch(err => {
         console.log(err)
         res.status(500).json({message: 'there was an error'})
     })
    }
 })


 server.delete('/:id', (req, res) => {
    db.select('*').from('cars').where({id: req.params.id}).del()
    .then(dealers => {
        res.status(200).json({message: 'should be gone dude'})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: "internal server problem, not real sure what's going on"})
    })
})

module.exports = server;