
# simplify-sketch

  Path smoothing for [Sketch](https://github.com/component/sketch).

## Installation

    $ component install component/simplify-sketch

## Example

```js
var canvas = document.querySelector('canvas');
var Sketch = require('sketch');
var simplify = require('simplify-sketch');

var sketch = Sketch(canvas);
simplify(sketch, .8);
```

## License

  MIT
