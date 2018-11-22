const originaljoi = require('joi');

const joi = originaljoi.extend({
  base: originaljoi.string(),
  name: 'string',
  coerce: (value, state, options) => (value === '' ? null : value) // eslint-disable-line
}, {
  base: originaljoi.bool(),
  name: 'bool',
  coerce: (value, state, options) => { // eslint-disable-line
    if (typeof value === 'boolean') {
      return value;
    }
    return value === 'on';
  }
}, {
  base: originaljoi.array(),
  name: 'array',
  coerce: (values, state, options) => { // eslint-disable-line
    return values.filter(value => value !== '');
  }
});

module.exports = joi;