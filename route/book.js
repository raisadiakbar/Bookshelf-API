const Router = require('express').Router();
const Controller = require('../controller/book');


Router.post('/', Controller.addBook);
Router.get('/', Controller.getAll);
Router.get('/:id', Controller.getBook);
Router.put('/:id', Controller.updateBooks);
Router.delete('/:id', Controller.deleteBooks);

module.exports = Router;
