const Post = require('../models/blog.model');

const getAllPosts = async (req, res) => {
    const posts = await Post.getAllPosts();
    res.json(posts);
}

module.exports = { getAllPosts }