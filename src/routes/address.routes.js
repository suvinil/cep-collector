const router = require('express').Router();
const { addressController } = require('../controllers');
const { validate } = require('../middlewares');
const {
  validationSchemas: { address },
} = require('../validations');

router.post('/', validate(address.create), addressController.create);

module.exports.address = router;
