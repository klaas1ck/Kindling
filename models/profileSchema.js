const path = require('path');
const mongoose = require('mongoose');
const { db } = require('./loginSchema');
const Schema = mongoose.Schema; // 

const profileSchema = new Schema({
       userName: {
            unique: true,
          type: String,
           required: true
             },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
        
    
},
    hobbies: {
        type: Array,
        required: true, 
    },
    
    email: {
        type: String,
        required: true
    }
}); //laver et skema objekt.

const profile = mongoose.model('profile', profileSchema);
profile.insert({userName: "Linda", firstName: "Linda", lastName:"Nielsen", hobbies:["tjek", "tjek2"], email:"linda"})

module.exports = profile;
