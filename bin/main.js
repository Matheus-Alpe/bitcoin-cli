#!/usr/bin/env node
// o comentário acima é para rodar no ambiente node
"use strict";

var program = require('commander');

var pkg = require('../package.json');

var convertBTC = require('./ConvertBTC');

program.version(pkg.version).description('Convert Bitcoin to any currency defined').option('-C, --currency <currency>', 'Currency to be converted. (Defaul: USD)').option('-A, --amount <amount>', 'Amount to convert. (Defaul: 1)').parse(process.argv);
var options = program.opts();
convertBTC(options.currency, options.amount);