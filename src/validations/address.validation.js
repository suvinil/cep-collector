const yup = require('yup');
const { constants } = require('../utils');

const get = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

const create = {
  body: yup.object().shape({
    zipCode: yup
      .string()
      .matches(/^\d{5}-\d{3}$/, 'Invalid zipCode (00000-000)')
      .required(),
    platform: yup.string().oneOf(constants.platforms).required(),
  }),
};

module.exports.address = {
  get,
  create,
};
