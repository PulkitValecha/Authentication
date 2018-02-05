const route = require('express').Router()
const users = require('../data/users')

route.get('/',(req, res)=>{
    res.render('signup');
})

route.post('/',(req, res)=>{
    users.addUser(req.body.username, req.body.password)
    res.redirect('/login')
})

exports = module.exports = {
    route
}