const db = require('../config/db');

const getAutorById = async (id) => {
    const [result] = await db.query('SELECT posts.id, posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria FROM posts WHERE posts.autor_id = ?;', [id]);
    return result;
}


module.exports = { getAutorById }