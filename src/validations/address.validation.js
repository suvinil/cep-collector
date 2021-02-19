const yup = require('yup');

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
    platform: yup
      .string()
      .matches(
        /(loja|pintor|institucional).[a-zA-Z]+.com/g,
        '(institucional.suvinil.com | loja.suvinil.com | pintor.suvinil.com)',
      )
      .required(),
  }),
};

module.exports.address = {
  get,
  create,
};
