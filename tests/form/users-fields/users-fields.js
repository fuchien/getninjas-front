const expect = require('chai').expect;
import jsdom from 'mocha-jsdom';
import renderUserFields from '../../../js/form/users-fields/users-fields';

describe('test renderUserFields function', () => {
    jsdom();
    it('should renderUserFields', () => {
        let userFields = [
            {
              "name": "cep",
              "label": "CEP",
              "type": "cep",
              "placeholder": "",
              "required": true
            },
            {
              "name": "name",
              "label": "Nome",
              "type": "small_text",
              "placeholder": "",
              "required": true
            },
            {
              "name": "email",
              "label": "Email",
              "type": "email",
              "placeholder": "Ex: nome@email.com",
              "required": true
            },
            {
              "name": "phone",
              "label": "Celular",
              "type": "phone",
              "placeholder": "",
              "required": true
            }
          ]
        expect(renderUserFields(userFields)).not.to.be.undefined;
    });
});