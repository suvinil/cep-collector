const { users } = require('./users.validation');
const { auth } = require('./auth.validation');
const { address } = require('./address.validation');

module.exports.validationSchemas = {
  users,
  auth,
  address,
};
