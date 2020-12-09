const mongoose = require('mongoose');
const Schema = mongoose.Schema; // 
const bcrypt = require('bcrypt');
const loginSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
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
    type: String,
    required: true, 
},
birthday: {
    type: Date,
    required: true,
}
});

//  before it saves schema it will execute this function to hash. user model is saved by  this and then it hashes the password and next() tells it to execute the next function.
loginSchema.pre('save', function(next) {
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next();
    });
});
const user = mongoose.model('user', loginSchema);
module.exports = user;
