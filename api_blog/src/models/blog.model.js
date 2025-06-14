const db = require('../config/db');

const getAutorById = async (id) => {
    const [result] = await db.query('SELECT posts.id, posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria FROM posts WHERE posts.autor_id = ?;', [id]);
    return result;
}

const getAllPosts = async () => {
    const [result] = await db.query('SELECT posts.id AS post_id, posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria, autores.id AS autor_id, autores.nombre AS autor_nombre, autores.email AS autor_email, autores.imagen AS autor_imagen FROM posts JOIN autores ON posts.autor_id = autores.id');
    return result;   
}

module.exports = { getAutorById, getAllPosts }