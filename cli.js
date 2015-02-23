#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var symbol = require('log-symbols');
var argv = require('minimist')(process.argv.slice(2));
var toQuotes = require('./');

var src  = argv.s || argv.src  || argv._[0];
var dest = argv.d || argv.dest;

if (!dest) {
  var ext = path.extname(src);
  var basename = path.basename(src, ext);
  var dirname = path.dirname(src);
  dest = path.join(dirname, '_' + basename + '.js');
}

if (!src) {
  var msg = chalk.red('  please specify a src file as the first arg, or with ')
    + chalk.bold('-s') + chalk.red(' or ')
    + chalk.bold('--src') + '.';
  console.log();
  console.log(msg);
}

var fp = path.join(process.cwd(), src);
if (!fs.existsSync(fp)) {
  console.log(chalk.red('  ' + fp + ' does not exist.'));
}

var str = fs.readFileSync(fp, 'utf8');
fs.writeFileSync(dest, toQuotes(str));
console.log();
console.log('  ' + symbol.success, 'Wrapped', chalk.bold(src), 'in quotes.');

