# API_BLOG

## DEFINICION DE PETICIONES

- Cada post recuperado debería ir acompañado de todos los datos del autor de este y no solo del identificador que lo define
-- Method: GET
-- URL: api/posts
-- Headers: XXXX
-- Body: XXXX

---- La consulta ya probada en la bbdd es:
SELECT posts.id, posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria 
FROM posts 
WHERE posts.autor_id = ?;

Dónde posts.autor_id es /:id


- Se ebe definir una URL que nos permita recuperar los diferentes posts escritos por un autor en concreto
-- Method: GET
-- URL: api/autores/:id/posts
-- Headers: XXXX
-- Body: XXXX