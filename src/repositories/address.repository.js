const { Address } = require('../models');

module.exports = {
  findOne: (params = '') => Address.findOne({ where: params }),
  findById: (id) => Address.findByPk(id),
  create: (params) => Address.create(params),
};
