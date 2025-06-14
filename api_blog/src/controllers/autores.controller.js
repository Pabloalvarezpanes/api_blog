const Autor = require('../models/blog.model');

const getAutorById = async (req, res) => {
    const id = req.params.id;
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "El autor con este id no existe"});

    }
    const autor = await Autor.getAutorById(id);
    res.json(autor);

}

module.exports = { getAutorById }