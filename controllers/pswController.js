const user = require('../models/loginSchema')
const express = require('express'); // require express module
const app = express(); // calls express function to start new express app
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
        const { oldpassword, newpassword } = req.body;

     user.findOne({user}, (error, user) => {
     bcrypt.compare(oldpassword, user.password, (error, same) =>{
          if(same){ 
              
          user.password = req.body.newpassword
               user.save(function(error) {
               console.log(user.password);
          });
              console.log('You have changed the password');
              res.redirect('/profile');
          } else {
              res.send('You have entered the wrong password');
              console.log('password issue');
          }
         
            })
                 })
     
                   }