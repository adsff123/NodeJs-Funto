"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.output.index);
router.get('/signup', ctrl.output.signup);
router.get('/signin', ctrl.output.signin);


router.post('/signin', ctrl.process.signin);
router.post('/signup', ctrl.process.signup);
 
module.exports = router;
