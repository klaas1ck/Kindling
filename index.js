// The relevant NPM 
const express = require('express'); // require express module
const app = express(); // calls express function to start new express app
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const router = express.Router();
const fileUpload = require('express-fileupload');
const user = require('./models/loginSchema');
const userController = require('./controllers/StoreUser');
const loginController = require('./controllers/LoginController');
const checker = require('./controllers/renderUsersAndCustomer');
const expressSession = require('express-session');
const validateRegister = require('./middlewares/storemiddleware.js');
const authenication = require('./middlewares/authenication.js');
const authenication2 = require('./middlewares/authenication2');
const pswController = require('./controllers/pswController');
const logoutController = require('./controllers/logoutController');
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'hi'}));
app.use(fileUpload());

// conncect to database

mongoose.connect('mongodb://localhost/Projekt', {useNewUrlParser: true});

// Express server
app.listen(4000, () => {
    console.log('App listening on port 4000');
});

// routes for login

app.get("/", authenication2, (req,res) => {
    res.render('index');
});

app.post("/register", validateRegister, userController);
app.post("/login", loginController);

// routes for customer database

app.get('/mainpage', authenication,  (req,res)=>{         
    res.render('mainpage')
});

app.post('/mainpage/logout', logoutController)