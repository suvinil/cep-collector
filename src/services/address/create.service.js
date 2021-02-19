const { addressRepository } = require('../../repositories');

module.exports.create = async (params) => {
  const zipCodeExists = await addressRepository.get({ zipCode: params.zipCode });
  const zipCode = !zipCodeExists ? await addressRepository.create(params) : zipCodeExists;

  return zipCode;
};
