const user = require('../models/loginSchema')
const express = require('express'); // require express module
const app = express(); // calls express function to start new express app
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');

// sorteret således at det stiger alfabetiskorden
module.exports = (req, res) =>{
    const users = user.find({})
    console.log(req.session);       

    res.render('databaser', {
        users
    }, );
} 