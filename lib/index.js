'use strict';

const _         = require ('lodash');
const mixin     = require ('mixin');
const Immutable = require ('immutable');


class Fancy {
  fancySet (path, value) {
    return this.setIn (_.toPath (path), value);
  }
}

class List extends mixin (Immutable.List, Fancy) {}
class Map extends mixin (Immutable.Map, Fancy) {}

const FancyImmutable = Object.assign ({}, Immutable);

FancyImmutable.Map  = Map;
FancyImmutable.List = List;

module.exports = FancyImmutable;
