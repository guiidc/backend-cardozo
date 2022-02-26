const routes = require('express').Router();
const schoolsController = require('./controllers/schoolsController');
const gradesController = require('./controllers/gradesController');
const userController = require('./controllers/userController');
const validateToken = require('./middlewares/validaeToken');


// users
routes.post('/login', userController.login)

// schools
routes.get('/schools', validateToken, schoolsController.index);
routes.post('/schools', validateToken, schoolsController.store);
routes.get('/schools/:id', validateToken, schoolsController.show);
routes.put('/schools/:id', validateToken, schoolsController.update);
routes.delete('/schools/:id', validateToken, schoolsController.remove);

// grades
routes.get('/grades', validateToken, gradesController.index);
routes.get('/grades/:id', validateToken, gradesController.show);
routes.post('/grades', validateToken, gradesController.store);
routes.put('/grades/:id', validateToken, gradesController.update);
routes.delete('/grades/:id', validateToken, gradesController.remove);

module.exports = routes;