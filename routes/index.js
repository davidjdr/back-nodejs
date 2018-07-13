/**
 * Este archivo centraliza la importación de las rutas
 */
const express = require('express');

const app = express();

app.use(require('./notas'));

//manejo 404
app.use(function(req, res) {
    res.status(404).send({
        url: 'Ruta: ' + req.originalUrl + ' no encontrada'})
});

module.exports = app;