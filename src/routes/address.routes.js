const router = require('express').Router();
const { addressController } = require('../controllers');
const { validate, isAuthorized } = require('../middlewares');
const {
  validationSchemas: { address },
} = require('../validations');

router.use(isAuthorized);

router.get('/', validate(address.list), addressController.list);
router.post('/', validate(address.create), addressController.create);

module.exports.address = router;
