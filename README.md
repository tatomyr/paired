# Paired

This library provides two main functions to transform an array of paired (key:val) objects to an appropriate object and vice-versa.

### Launching

* Via CDN: include `lib/paired.babel.js` file as script on `html` page.
* As a package: `import paired from '<path>/<to>/paired.babel.js'` (?).

### Using
```javascript
paired().objToArr({ "foo": 1, "bar": 1 }) // [{ key: "foo", val: 1 }, { key: "bar", val: 2 }]
paired().arrToObj([{ key: "foo", val: 1 }, { key: "bar", val: 2 }]) // { "foo": 1, "bar": 1 }
```
