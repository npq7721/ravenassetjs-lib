var OPS = require('./ops.json');

var map = {};
for (var op in OPS) {
  var code = OPS[op];
  map[code] = op;
}

export const opsMap = map
