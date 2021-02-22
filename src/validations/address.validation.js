const yup = require('yup');
const { constants, dateValidate } = require('../utils');

const get = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

const list = {
  query: yup.object().shape({
    dateStart: yup.date().transform(dateValidate).default(new Date(2000, 1, 1)),
    dateEnd: yup.date().transform(dateValidate).default(new Date()),
    order: yup.string().oneOf(constants.order),
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
  list,
  create,
};
