const bcrypt = require('bcrypt');
const path = require('path');
const bodyParser = require('body-parser');
const user = require('../models/loginSchema.js');


// username og password lig med req.body således at vi kan extracte det fra feltet. dette bruger vi til at sammenligne i en if statement med bcrypt.
module.exports = async (req, res) =>{
    const { username, password } = req.body;

    await user.findOne({username:username}, (error,user) => {      
      if (user){ 
        bcrypt.compare(password, user.password, (error, same) =>{
          if(same){ 
              
           req.session.userId = user._id
           res.redirect('/mainpage');
              console.log('logged in');
          } else {
              res.send('The login details you have entered is wrong! return back to the login page to try again.');
              console.log('password issue');
          }
         
        })
      } else {
          console.log('username issue');
          res.send('The login details you have entered is wrong! return back to the login page to try again.');
      }
      
    })
};

