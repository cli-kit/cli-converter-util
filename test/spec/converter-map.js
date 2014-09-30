var expect = require('chai').expect
  , cvutil = require('../..')
  , ConverterMap = cvutil.ConverterMap;

describe('cli-converter-util:', function() {
  it('should create converter map', function(done) {
    var o = {field: 'value'};
    var map = new ConverterMap(o);
    expect(map.field).to.eql('value');
    done();
  });
})
