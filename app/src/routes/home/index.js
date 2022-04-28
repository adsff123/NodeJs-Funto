// 라우팅

"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require('./home.ctrl');
const passport = require('../../config/passport');


// get
router.get('/', ctrl.output.index);
router.get('/signup', ctrl.output.signup);
router.get('/signin', ctrl.output.signin);
router.get('/signout', ctrl.output.signout);
router.get('/posts', ctrl.output.posts);
router.get('/postsCreate', ctrl.output.postsCreate);
router.get('/postsRead/:idx', ctrl.output.postsRead);
router.get('/postsUpdate', ctrl.output.postsUpdate);


// post
// router.post('/signin', ctrl.process.signin);

// 이상하게.... passport 전략이 성공해도 failureRedirect로 호출됨..
router.post('/signin', passport.authenticate('local-login', {
    failureRedirect: '/'
}), (req,res) =>{
    res.redirect('/');
});
router.post('/signup', ctrl.process.signup);
router.post('/postsCreate', ctrl.process.create);
router.post('/postsDelete', ctrl.process.delete);

module.exports = router;
