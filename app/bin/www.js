"use strict";

// app.js에서 app constant를 가져옴
const app = require("../app");
const hostname = process.env.HOSTNAME;
const port = process.env.PORT || 3000;

app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});