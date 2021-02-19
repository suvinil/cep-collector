const { addressRepository } = require('../../repositories');

module.exports.create = async (body) => {
  return addressRepository.create(body);
};
