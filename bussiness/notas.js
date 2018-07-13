class Notas {
    constructor() {}

    listarNotas(req, res) {
        res.json([{
            idNota: 123,
            nota: "Hola mundo1"
        },{
            idNota: 456,
            nota: "Hola mundo2"
        },{
            idNota: 789,
            nota: "Hola mundo3"
        }]);
    }

    crearNota(req, res) {
        res.json({
            idNota: 123,
            nota: "Hola mundo"
        });
    }

    obtenerNota(req, res) {
        res.json({
            idNota: 123,
            nota: "Hola mundo"
        });
    }

    actualizarNota(req, res) {
        res.json({
            idNota: 123,
            nota: "Hola mundo"
        });
    }

    borrarNota(req, res) {
        res.json({
            idNota: 123,
            nota: "Hola mundo"
        });
    }

}

module.exports = new Notas();