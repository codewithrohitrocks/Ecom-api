const {getProduct,postProduct} =  require('../controller/productcontroller')
const auth = require('../middleware/auth')
const route = require('express').Router()

route.post('/',auth,postProduct)
route.get('/',getProduct)

module.exports = route