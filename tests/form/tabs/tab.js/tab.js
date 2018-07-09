const expect = require('chai').expect;
import renderTab from '../../../../js/form/tabs/tab/tab';

describe('test renderTab function', () => {
    it('should renderTab', () => {
        let tab = {
            tab: {tabName: `2. Seus dados`, tabContent: `datas`},
            index: 0
        }
        expect(renderTab(tab)).not.to.be.undefined;
    });
});