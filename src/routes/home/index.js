"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.index );
router.get('/signup', ctrl.signup );
router.get('/signin', ctrl.signin );

module.exports = router;
