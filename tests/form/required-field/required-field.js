const expect = require('chai').expect;
import renderRequiredField from '../../../js/form/required-field/required-field';

describe('test renderRequiredField function', () => {
    it('should renderRequiredField', () => {
        expect(renderRequiredField()).not.to.be.undefined;
    });
});