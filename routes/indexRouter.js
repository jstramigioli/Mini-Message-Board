const { Router } = require("express");
const indexController = require('../controllers/indexController')

const indexRouter = Router();


indexRouter.get('/', indexController.messageListGet)
indexRouter.get('/new', indexController.newMessageGet)
indexRouter.post('/new', indexController.newMessagePost)
indexRouter.get('/seed', indexController.populatedb)

module.exports = indexRouter