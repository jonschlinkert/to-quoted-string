/*!
 * to-quoted-string <https://github.com/jonschlinkert/to-quoted-string>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
require('should');
var toQuotedString = require('./');

describe('toQuotedString', function () {
  it('should wrap a string in quotes:', function () {
    toQuotedString('foo bar baz').should.equal('module.exports = \'foo bar baz\';');
  });
  it('should wrap a multi-line string in quotes:', function () {
    toQuotedString('foo bar baz\nquux fez\n').should.equal([
      'module.exports = [',
      '  \'foo bar baz\',',
      '  \'quux fez\'',
      '];'
    ].join('\n'));
  });

  it('should throw an error if arguments are invalid:', function () {
    (function () {
      toQuotedString();
    }).should.throw('to-quoted-string expects a string.');
  });
});
