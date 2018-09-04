const paths = require('./paths');
const validators = require('../lib/validators');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Name your project',
    default: paths.project.filename,
    validate: validators.name
  },
  {
    type: 'input',
    name: 'entry',
    message: 'Name your entry file',
    default: 'index.js',
    validate: validators.jsFile
  },
  {
    type: 'input',
    name: 'srcDirectory',
    message: 'Name your source directory',
    default: 'src',
    validate: validators.alphaOnly
  },
  {
    type: 'input',
    name: 'distDirectory',
    message: 'Name your distribution directory',
    default: 'dist',
    validate: validators.alphaOnly
  },
  {
    type: 'confirm',
    name: 'sass',
    message: 'Would you like to use Sass?',
    default: true
  },
  {
    type: 'confirm',
    name: 'redux',
    message: 'Are you using Redux?',
    default: true
  },
  {
    type: 'input',
    name: 'initialReducer',
    message: 'Name your initial reducer',
    when: answers => answers.redux,
    default: 'application',
    validate: validators.alphaOnly
  },
  {
    type: 'confirm',
    name: 'reduxSaga',
    message: 'Are you using Redux Saga?',
    when: answers => answers.redux,
    default: true
  },
  {
    type: 'confirm',
    name: 'jest',
    message: 'Are you using Jest as a test runner?',
    default: true
  }
];

module.exports = questions;
