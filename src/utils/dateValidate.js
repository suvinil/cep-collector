const { parse, isMatch } = require('date-fns');

module.exports = (value, stringDate) => {
  const parsedDate = isMatch(stringDate, 'dd/MM/yyyy')
    ? parse(stringDate, 'dd/MM/yyyy', new Date())
    : parse(stringDate, 'yyyy-MM-dd', new Date());

  return parsedDate;
};
