const express = require('express');
const app = express();
const notas = require('../bussiness/notas');

/**
 * @swagger
 * /api/notas:
 *   get:
 *     tags:
 *       - Notas
 *     description: Retorna todas las notas
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of events
 *     #    schema:
 *      #     $ref: '#/definitions/Event'
 */
app.route('/notas')
    .get(notas.listarNotas);

/**
 * @swagger
 * /api/notas:
 *   post:
 *     tags:
 *       - Notas
 *     description: Ingresa una nota
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: crea una nota
 *     #    schema:
 *      #     $ref: '#/definitions/Event'
 */
app.route('/notas')
    .post(notas.crearNota);

app.route('/notas/:idNota')
    .get(notas.obtenerNota)
    .put(notas.actualizarNota)
    .delete(notas.borrarNota);

module.exports = app;