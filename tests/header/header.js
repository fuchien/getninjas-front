const expect = require('chai').expect;
import renderHeader from '../../js/header/header';

describe('test renderHeader function', () => {
    it('should render header', () => {
        const headerElement = {innerHTML: ''};
        expect(renderHeader(headerElement)).to.be.undefined;
    });
});