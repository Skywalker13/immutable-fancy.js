'use strict';

const _         = require ('lodash');
const mixin     = require ('mixin');
const Immutable = require ('immutable');


class Fancy {
  fancySet (path, value) {
    return this.setIn (_.toPath (path), value);
  }

  fancyGet (path) {
    return this.getIn (_.toPath (path));
  }
}

class Iterable extends mixin (Immutable.Iterable, Fancy) {}

const FancyImmutable = Object.assign ({}, Immutable);
FancyImmutable.Iterable = Iterable;

module.exports = FancyImmutable;
