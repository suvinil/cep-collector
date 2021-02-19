const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');
const { addressService } = require('../services');

module.exports = {
  create: catchAsync(async (req, res) => {
    const { body } = req;
    const response = await addressService.create(body);

    return res.status(StatusCodes.CREATED).json(response);
  }),
};
