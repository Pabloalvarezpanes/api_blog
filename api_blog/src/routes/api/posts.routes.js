const routes = require('express').Router();

const { getAllPosts } = require('../../controllers/posts.controller');
routes.get('/', getAllPosts);

module.exports = routes;