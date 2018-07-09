const expect = require('chai').expect;
import jsdom from 'mocha-jsdom';
import { EventEmitter } from 'events';
const emitter = new EventEmitter();
import { renderButtonFinished, renderButtonSearch } from '../../../js/form/button/button';

describe('test Button.js', () => {
    jsdom();
    it('should renderButtonFinished', () => {
        let options = {
            message: `BUSCAR PROFISSIONAIS`, emitter: emitter, emitterName: `searchProfessional`, openFieldTab: `users_fields`, openFieldContent: `datas`
        }
        expect(renderButtonFinished(options)).not.to.be.undefined;
    });

    it('should renderButtonSearch', () => {
        let options = {
            message: `BUSCAR PROFISSIONAIS`, emitter: emitter, emitterName: `searchProfessional`, openFieldTab: `users_fields`, openFieldContent: `datas`
        }
        expect(renderButtonSearch(options)).not.to.be.undefined;
    });
});