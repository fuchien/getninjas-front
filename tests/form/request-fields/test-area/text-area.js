const expect = require('chai').expect;
import createTextArea from '../../../../js/form/request-fields/text-area/text-area';

describe('test createSelects function', () => {
    it('should createSelects', () => {
        let textArea = `Digite seu nome`;
        expect(createTextArea(textArea)).not.to.be.undefined;
    });
});