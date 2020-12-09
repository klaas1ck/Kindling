module.exports = (req, res, next) => {
    if (req.email <= 5, req.password <= 5, req.body.username <= 5) {
       return res.redirect('/');
        
    } 
    next()
}
