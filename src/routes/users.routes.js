const { Router, response } = require('express');
const multer = require('multer')
const uploadConfig = require('../configs/uploads')



const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const UsersController = require('../controllers/UsersController')
const UserAvatarController = require('../controllers/UserAvatarController');
const ensureAuthentitcate = require("../middlewares/ensureAuthenticate")

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthentitcate,usersController.update);
usersRoutes.get('/', usersController.index)
usersRoutes.patch('/avatar', ensureAuthentitcate, upload.single('avatar'), userAvatarController.update);

module.exports = usersRoutes;