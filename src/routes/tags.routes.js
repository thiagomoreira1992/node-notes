const { Router } = require('express');

const tagsRoutes = Router();

const TagsController = require('../controllers/TagsController')
const ensureAuthentitcate = require("../middlewares/ensureAuthenticate")

const tagsController = new TagsController();

tagsRoutes.get('/',ensureAuthentitcate, tagsController.index);

module.exports = tagsRoutes;