const routes = require('express').Router();

const { getAllPosts } = require('../../models/blog.model');
routes.get('/', getAllPosts);

module.exports = routes;