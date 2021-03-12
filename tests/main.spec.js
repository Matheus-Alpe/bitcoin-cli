const expect = require( 'chai').expect;
const chalk = require('chalk');

const exec = require('child_process').exec;
const btcConverter = './src/main.js';
/**
 * executar no terminal 'chmod +x src/main.js'
 * para poder poder ter permissão para exec o arquivo;
 */

const pkg = require('../package.json');


describe('Main CLI', () => {
  it('should return version when `btc-converter --version`', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done()
    });
  });

  it('should return description when `btc-converter --help`', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('Convert Bitcoin to any currency defined')).to.be.true;
      done()
    });
  });

  it('should return currency option when `btc-converter --help`', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('--currency')).to.be.true;
      done()
    });
  });

  it('should return amount option when `btc-converter --help`', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('--amount')).to.be.true;
      done()
    });
  });
});
