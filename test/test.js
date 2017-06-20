const expect = require('chai').expect;
const paired = require('../lib/paired.babel.js');

// Test instances
const obj = { a: 1, b: 2 };
const arr = paired('key', 'value').objToArr(obj);
const arrAsObj = ['a', 'b', 'c'];

describe('#paired', () => {
  it(`should return paired array for object ${JSON.stringify(obj)}`, () => {
    const result = paired().objToArr(obj);
    expect(JSON.stringify(result)).to.equal('[{"key":"a","val":1},{"key":"b","val":2}]');
  });
  it(`should return object for paired array ${JSON.stringify(arr)}`, () => {
    const result = paired('key', 'value').arrToObj(arr);
    expect(JSON.stringify(result)).to.equal(JSON.stringify(obj));
  });
  it(`should return paired array for array ${JSON.stringify(arrAsObj)} considering it as an object with numeral keys`, () => {
    const result = paired('index').objToArr(arrAsObj);
    expect(JSON.stringify(result)).to.equal('[{"index":"0","val":"a"},{"index":"1","val":"b"},{"index":"2","val":"c"}]');
  });
  it('should throw an error because of type mismatch', () => {
    try {
      paired().arrToObj({});
    } catch (err) {
      expect(err.message).to.equal('Argument must be an Array instance');
    }
  });

});
