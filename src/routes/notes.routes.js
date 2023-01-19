const { Router } = require('express');

const notesRoutes = Router();

const NotesController = require('../controllers/NotesController')
const ensureAuthentitcate = require("../middlewares/ensureAuthenticate")
const notesController = new NotesController();

notesRoutes.use(ensureAuthentitcate)

notesRoutes.get('/',notesController.index);
notesRoutes.post('/',notesController.create);
notesRoutes.get('/:id',notesController.show);
notesRoutes.delete('/:id',notesController.delete);

module.exports = notesRoutes;