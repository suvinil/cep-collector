const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');
const { addressService } = require('../services');

module.exports = {
  list: catchAsync(async (req, res) => {
    const { query } = req;

    const response = await addressService.list(query);

    return res.status(StatusCodes.OK).json(response);
  }),

  create: catchAsync(async (req, res) => {
    const { body } = req;

    const response = await addressService.create(body);

    return res.status(StatusCodes.CREATED).json(response);
  }),
};
