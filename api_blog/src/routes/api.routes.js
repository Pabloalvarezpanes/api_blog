const routes = require('express').Router();

routes.use('/posts', require('./api/posts.routes'));
routes.use('/autores', require('./api/autores.routes'));

module.exports = routes;