const { Router } = require('express');


const usersRoutes = Router();

const UsersController = require('../controllers/UsersController')
const ensureAuthentitcate = require("../middlewares/ensureAuthenticate")

const usersController = new UsersController();

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthentitcate,usersController.update);
usersRoutes.get('/', usersController.index)

module.exports = usersRoutes;