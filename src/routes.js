const { Router } = require('express');
const ProductController = require('./Controller/ProductController');
const UserController = require('./Controller/UsersController');
const routes = Router();

routes.get('/users', UserController.index);

routes.get('/users/:id', UserController.show);

routes.post('/users', UserController.store);

routes.put('/users/:id', UserController.update);

routes.get('/produtos', ProductController.index);

routes.post('/produtos', ProductController.store);

module.exports = routes;