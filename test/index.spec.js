'use strict';

const {expect} = require ('chai');
const {fromJS} = require ('../lib/index.js');


describe ('FancyImmutable API', function () {
  it ('#fancySet', function () {
    let expected;
    const obj = fromJS ({a: {b: {c: 0}, d: ['x', 'y', 'z']}});

    /* Set a simple value in an object */
    expected = {a: {b: {c: 1}, d: ['x', 'y', 'z']}};
    expect (obj.fancySet ('a.b.c', 1).toJS ()).to.be.eql (expected);

    /* Set a simple value in an array */
    expected = {a: {b: {c: 0}, d: ['x', 'a', 'z']}};
    expect (obj.fancySet ('a.d[1]', 'a').toJS ()).to.be.eql (expected);

    /* Set an array in an object */
    expected = {a: {b: {c: ['a', 'b']}, d: ['x', 'y', 'z']}};
    expect (obj.fancySet ('a.b.c', ['a', 'b']).toJS ()).to.be.eql (expected);
  });
});
