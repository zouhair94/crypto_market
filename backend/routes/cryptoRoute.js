const express = require('express');
const router = express.Router();
const { getData } = require('../controller/crypto');

router.get( '/:search', getData);

module.exports = router;