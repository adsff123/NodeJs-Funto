"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅 세팅
const home = require("./src/routes/home");

// View 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); //미들웨어 등록하는 메소드

// bin/www.js로 app constant를 보내줌
module.exports = app; 