'use strict';
const express = require('express');
const controller = require('./employee.controller');

const router = express.Router();

router.get('/:id', controller.getEmployee);
router.post('',controller.saveEmployee);

module.exports = router;