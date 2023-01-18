const { Router } = require('express');

const usersRoutes = require ('./users.routes')
const notesRoutes = require ('./notes.routes')
const sessionsRoutes = require('./sessions.routes')
const tagsRoutes = require('./tags.routes')

const routes = Router();

routes.use("/users", usersRoutes)
routes.use("/notes", notesRoutes)
routes.use("/sessions", sessionsRoutes)
routes.use("/tags", tagsRoutes)

module.exports = routes;