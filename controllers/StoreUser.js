const user = require('../models/loginSchema.js');
const path = require('path');
const express = require('express')
const router = express.Router()
 module.exports = async (req,res)=> { 
    await user.create(req.body, (error, user) => {               
        res.render('index');   
    // Det er ikke så godt at vi har console logget, password og username. Det ødelægger lidt vores kryptering giggles :D
        console.log('done');
        console.log(req.body.username);
        console.log(req.body.password);
        console.log(req.body.email);
        console.log(req.body.hobbies);
      });               
};
