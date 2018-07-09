const expect = require('chai').expect;
import { addCepMask, addCelMask } from '../../../js/form/form-mask/form-mask';

describe('test form-mask', function() {
  it('test addCepMask function', function() {
    expect(addCepMask('')).to.be.eql('');
    expect(addCepMask('12345')).to.be.eql('12345');
    expect(addCepMask('123456')).to.be.eql('12345-6');
    expect(addCepMask('12345678')).to.be.eql('12345-678');
  });

  it('test addCelMask function', function() {
    expect(addCelMask('')).to.be.eql('');
    expect(addCelMask('12')).to.be.eql('(12');
    expect(addCelMask('123456')).to.be.eql('(12) 3456');
    expect(addCelMask('1234567891')).to.be.eql('(12) 3456-7891');
    expect(addCelMask('12345678912')).to.be.eql('(12) 34567-8912');
  });
});