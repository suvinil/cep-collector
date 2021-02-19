const { users } = require('./users.routes');
const { auth } = require('./auth.routes');
const { address } = require('./address.routes');

module.exports = {
  users,
  auth,
  address,
};
