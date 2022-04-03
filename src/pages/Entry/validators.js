const nextFunction = (text, next, ...rest) => {
  if (next) {
    if (next.params) {
      const { params, name } = next;
      return name(text, params);
    }
    return next(text, ...rest);
  }
  return '';
};
const PatternValidator = (text = '', { pattern, messege = 'Pattern not found' }, next = null, ...rest) => {
  if (pattern.test(text) === false) { return messege; }

  return nextFunction(text, next, ...rest);
};

const NumberValidator = (text, next = null, ...rest) => {
  const number = parseInt(text, 10);
  if (Number.isNaN(number)) { return 'Input should be a number'; }

  return nextFunction(text, next, ...rest);
};

const MinMaxValidator = (text, { min = 0, max }, next = null, ...rest) => {
  const number = parseFloat(text);
  if (number > max || number < min) { return `The value should be between ${min} and ${max}`; }
  return nextFunction(text, next, ...rest);
};
const RequiredValidator = (text, next = null, ...rest) => {
  if (text.length === 0) { return 'Input is Required'; }
  return nextFunction(text, next, ...rest);
};

const LengthValidator = (text, { min = 0, max = 200 }, next = null, ...rest) => {
  if (text.length < min) { return `Value can't be shorter than ${min} characters`; }
  if (text.length > min) { return `Value can't be longer than ${max} characters`; }
  return nextFunction(text, next, ...rest);
};
const MultiValidator = (text, ...args) => {
  const validator = args.pop();
  if (validator.params) {
    const { params, name } = validator;
    if (args.length === 0) return name(text, params);
    return name(text, params, ...args);
  }

  if (args.length === 0) return validator(text);
  return validator(text, ...args);
};

export {
  NumberValidator, RequiredValidator,
  MinMaxValidator, MultiValidator,
  LengthValidator, PatternValidator,
};
