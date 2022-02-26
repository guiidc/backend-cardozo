const routes = require('express').Router();
const schoolsController = require('./controllers/schoolsController');
const gradesController = require('./controllers/gradesController');

routes.get('/schools', schoolsController.index);
routes.get('/schools/:id', schoolsController.show);
routes.put('/schools/:id', schoolsController.update);
routes.delete('/schools/:id', schoolsController.remove);
routes.get('/grades', gradesController.index);
routes.get('/grades/:id', gradesController.show);
routes.put('/grades/:id',gradesController.update);
routes.delete('/grades/:id', gradesController.remove);
module.exports = routes;