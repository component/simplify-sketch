
/**
 * Module dependencies.
 */

var simplify = require('simplify');

/**
 * Simplify `sketch` paths with `tolerance` defaulting to 1.
 *
 * @param {Sketch} sketch
 * @param {Number} tolerance
 * @api public
 */

module.exports = function(sketch, tolerance){
  sketch.canvas.addEventListener('mouseup', function(){
    var path = sketch.objs[sketch.objs.length - 1];
    path.points = simplify(path.points, 1);
    sketch.draw();
  }, false);
};