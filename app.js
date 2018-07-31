require('./config/config');

//importamos express
const express = require('express'),
    bodyParser = require('body-parser'),
    swaggerJSDoc = require('swagger-jsdoc'),
    swaggerUi = require('swagger-ui-express'),
    logger = require('morgan'),
    //generamos una app
    app = express();

// swagger definition
const swaggerDefinition = {
    info: {
        title: 'Node Swagger API',
        version: '1.0.0',
        description: 'Demonstrating how to describe a RESTful API with Swagger'
    },
    host: 'localhost:' + process.env.PORT,
    basePath: '/'
};

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./routes/*.js']
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Log requests to the console.
app.use(logger(process.env.NODE_ENV));

// Configuración global de rutas
app.use(require('./routes/index'));

//configuración ruta de documentación
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const server = app.listen(process.env.PORT, function() {
    console.log('Express API escuchando, puerto: ', process.env.PORT);
});

module.exports = server;