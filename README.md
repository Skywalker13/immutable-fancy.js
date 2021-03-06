
# immutable-fancy

This module is just a wrapper around [Immutable.js][1]. It provides
fancy methods in order to avoid having to use `set`, `setIn`,
`get`, `getIn`, etc, ... which are a bit annoying when it's
simpler to use a path.

ImmutableFancy can be used exactly like Immutable.js. It extends
the objects with the `fancy*` methods.

## API additions

On `Iterable ()` which is the base class of all other classes
like `Map ()` and `List ()` for example.

### **fancySet ()**

Set a value in the immutable object exactly like `setIn ()`
but with a path.

```js
const newObj = obj.fancySet ('a.b[1].c', value);
```

### **fancyGet ()**

Get a value from the immutable object exactly like `getIn ()`
but with a path.

```js
const value = obj.fancyGet ('a.b[1].c');
```

### **fancyDelete ()**

Delete a value in the immutable object exactly like `deleteIn ()`
but with a path.

```js
const newObj = obj.fancyDelete ('a.b[1].c');
```

Alias: **fancyRemove ()**

[1]: https://facebook.github.io/immutable-js/
