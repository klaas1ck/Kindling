const user = require('../models/loginSchema');
module.exports = (req, res, next) => {
    user.findById(req.session.userId, (error, user) => {
        if(error || !user) 
            return res.send('you do not have permission to enter this page');
        next()
        
    })
}