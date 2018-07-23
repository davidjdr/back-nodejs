// Importo chai
let chai = require('chai');

// Se le dice a chai que se usará el estilo de assertion "should"
//chai.should();
const expect = chai.expect;

// Importo la clase que quiero testear
const Notas = require('../bussiness/notas');

const res = {
  json: function (d) {
    return d;
  }
};

console.log('NOTAASSSSS', Notas.listarNotas(null, res))

describe('Notas', () => {
    describe('#listado', () => {
  
      beforeEach(() => {
        //Se ejecuta antes de cada it
      });
  
      it('retorna un listado', () => {
        //falla si no retorna un listado de 3
        //Notas.notas.should.have.lengthOf(3);
        expect(Notas.listarNotas(null, res)).to.have.lengthOf(3);
      });
  
      it('retorna una nota', () => {
        // verifica el contenido de una nota
        expect(Notas.obtenerNota(null, res)).to.equal({
          idNota: 123,
          nota: "Hola mundo1"
        });
      });

    });
});