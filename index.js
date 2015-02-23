/*!
 * to-quoted-string <https://github.com/jonschlinkert/to-quoted-string>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var normalize = require('to-double-quotes');

module.exports = function (str) {
  if (typeof str !== 'string') {
    throw new Error('to-quoted-string expects a string.');
  }

  var lines = normalize(str).trim().split('\n');
  if (lines.length === 1) {
    return wrap('\'' + lines[0] + '\'');
  }

  return wrap(lines.map(function (line, i) {
    return '  \'' + line + (i === (lines.length - 1) ? '\'' : '\',');
  }).join('\n'), true);
};

function wrap(str, multiline) {
  if (multiline) {
    return 'module.exports = [\n' + str + '\n];';
  }
  return 'module.exports = ' + str + ';';
}
