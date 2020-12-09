module.exports = (req, res, next) =>{
    if(req.session.userId) {
      return res.redirect('/mainpage') // hvis man logger ind så kan man ikke komme tilbage med mindre man logger ud
    }
    next()
}