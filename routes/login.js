const route = require('express').Router()
const users = require('../data/users')

route.get('/',(req, res)=>{
    res.render('login')
})

route.post('/',(req, res)=>{
    let user = users.getUser(req.body.username)
    if(!user){
       return res.redirect('/login')
    }

    let newToken = users.createToken(user.username)
    res.header('Set-cookie',`login = ${newToken}`)
    res.redirect('/secret')

})


exports = module.exports = {
    route
}