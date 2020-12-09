const express = require('express'); // require express module
const app = express();
const customer = require('../models/customerSchema.js');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
app.use(bodyParser.json());

// Render database

exports.renderDatabase = async (req,res)=>{
    const customers = await customer.find({}, function(err,customers){}).sort({name: 1})
    res.render('databaser', {customers});
};

exports.postCustomer = async (req,res)=>{
    await customer.create(req.body, (error,customer)=>{
        res.redirect ('/database');
    })
};

// Søger i phoneNumber via. regular expression af værdien search feltet af requesten

exports.searchCustomer = async (req,res)=>{
    let result = [];
    if(req.body.search){
        const customers = await customer.find({"phoneNumber": {"$regex": req.body.search, "$options": "i" } }, function(err,customers) { });
        console.log(customers);
        res.render('databaser', {customers});
    }
};
exports.removeCustomer = async (req,res)=>{
    const { name, customerid } = req.body;
    console.log('hello'  + req.body);
  await customer.findByIdAndRemove(customerid, (error, customer) => {res.redirect('/database')} )
};

exports.databaseLogout = async (req, res, next) => {
    await req.session.destroy(() => {
        res.redirect('/');
    })
};


