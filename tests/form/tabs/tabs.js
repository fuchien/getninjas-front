const expect = require('chai').expect;
import renderTabs from '../../../js/form/tabs/tabs';

describe('test renderTabs function', () => {
    it('should renderTabs', () => {
        let tabs = [
            {tabName: `1. Seu pedido`, tabContent: `requests`},
            {tabName: `2. Seus dados`, tabContent: `datas`}
        ];
        expect(renderTabs(tabs)).not.to.be.undefined;
    });
});