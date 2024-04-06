const express = require('express');
const router = express.Router();

const getDetails = require('../controllers/registerController');

router.post('/register', getDetails);

module.exports = router;

