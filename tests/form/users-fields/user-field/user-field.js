const expect = require('chai').expect;
import jsdom from 'mocha-jsdom';
import renderUserField from '../../../../js/form/users-fields/user-field/user-field';
import { addCepMask, addCelMask } from '../../../../js/form/form-mask/form-mask';

describe('test renderUserField function', () => {
    jsdom();
    it('should renderUserField', () => {
        let user = {
            index: 0,
            userField: {
                label: "CEP",
                name: "cep",
                placeholder: "",
                required: true,
                type: "cep"
            }
        }
        expect(renderUserField(user)).not.to.be.undefined;
    });
});