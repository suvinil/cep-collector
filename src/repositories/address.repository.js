const { fn, col } = require('sequelize');
const { Address } = require('../models');

module.exports = {
  findAll: (query = '', order) =>
    Address.findAll({
      where: query,
      order: [['createdAt', order]],
    }),
  findMaxMinDate: (type = '', column = 'createdAt') =>
    Address.findAll({ attributes: [[fn(type, col(column)), `${type}_date`]], raw: true }),
  findOne: (params = '') => Address.findOne({ where: params }),
  findById: (id) => Address.findByPk(id),
  create: (params) => Address.create(params),
};