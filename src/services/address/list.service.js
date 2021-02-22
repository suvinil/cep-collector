const { Op } = require('sequelize');

const { addressRepository } = require('../../repositories');

module.exports.list = async (data) => {
  const { dateStart, dateEnd } = data;

  const query = {
    createdAt: {
      [Op.between]: [dateStart, dateEnd],
    },
  };

  const findAddresses = await addressRepository.findAll(query, data.order);

  return findAddresses;
};
