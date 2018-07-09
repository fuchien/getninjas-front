const expect = require('chai').expect;
import createSelects from '../../../../js/form/request-fields/select/select';

describe('test createSelects function', () => {
    it('should createSelects', () => {
        let select = {
            name: "Qual será o serviço?",
            required: true,
            selects: ["Coloração", "Corte", "Escova ", "Escova progressiva/definitiva", "Luzes", "Manicure", "Pedicure", "Penteado"]
        }
        expect(createSelects(select)).not.to.be.undefined;
    });
});