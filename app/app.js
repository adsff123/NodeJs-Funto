"use strict";

// 모듈
const express = require("express");
const cookieParser = require('cookie-parser');
const session = require("express-session");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// session 설정
app.use(cookieParser());
app.use(session({
    key: 'sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24000 * 60 * 60 // 쿠키 유효기간 24시간
    }
  }));

const passport = require('./src/config/passport');

// Passport
app.use(passport.initialize());
app.use(passport.session());

// 라우팅 세팅
const home = require("./src/routes/home");

// Custom Middlewares // 3
app.use(function(req,res,next){
  console.log(req.isAuthenticated());
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.currentUser = req.user;
  next();
});

// View 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true })); // url로 한글이나 데이터를 

app.use("/", home); //미들웨어 등록하는 메소드

// bin/www.js로 app constant를 보내줌
module.exports = app; 