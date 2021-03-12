#!/usr/bin/env node
// o comentário acima é para rodar no ambiente node

const program = require('commander');
const pkg = require('../package.json');
const convertBTC = require('./ConvertBTC');

program
  .version(pkg.version)
  .description('Convert Bitcoin to any currency defined')
  .option('-C, --currency <currency>', 'Currency to be converted. (Defaul: USD)')
  .option('-A, --amount <amount>', 'Amount to convert. (Defaul: 1)')
  .parse(process.argv);

const options = program.opts();

convertBTC(options.currency, options.amount);
