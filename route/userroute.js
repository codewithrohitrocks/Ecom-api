const {register,login} =  require('../controller/userConroller')

const route = require('express').Router()

route.post('/',register)
route.post('/login',login)

module.exports = route