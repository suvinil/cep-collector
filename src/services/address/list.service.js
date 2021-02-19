const { Op } = require('sequelize');
const { format } = require('date-fns');
const { addressRepository } = require('../../repositories');
const { constants } = require('../../utils');

module.exports.list = async (data) => {
  const findMinDate = await addressRepository.findMaxMinDate('min', 'created_at');
  const findMaxDate = await addressRepository.findMaxMinDate('max', 'created_at');
  const maxDate = findMaxDate[0] ? findMaxDate[0].max_date : new Date();
  const minDate = findMinDate[0] ? findMinDate[0].min_date : new Date();

  const dateStart = data.dateStart || minDate;
  const dateEnd = data.dateEnd || maxDate;

  const query = {
    createdAt: {
      [Op.between]: [dateStart, dateEnd],
    },
  };

  const findAddresses = await addressRepository.findAll(query, data.order);

  const addressTreated = findAddresses.map((address) => {
    const treated = {
      id: address.id,
      platformId: address.platform,
      platformDescription: constants.platforms[address.platform - 1],
      zipCode: address.zipCode,
      createdAt: format(address.createdAt, 'yyyy-MM-dd'),
    };

    return treated;
  });

  return addressTreated;
};
