const routes = require('express').Router();
const schoolsController = require('./controllers/schoolsController');

routes.get('/schools', schoolsController.index);
routes.get('/schools/:id', schoolsController.show);
routes.put('/schools/:id', schoolsController.update);
routes.delete('/schools/:id', schoolsController.remove);
module.exports = routes;