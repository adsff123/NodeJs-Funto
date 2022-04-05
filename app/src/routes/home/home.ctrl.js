// 콘트롤러 역할

"use strict";

const index = (req,res) => { 
    res.render("home/index"); 
};

const signin = (req,res) => { 
    res.render("home/signup"); 
};

const signup = (req,res) => { 
    res.render("home/signin");
};

module.exports = {
    index,
    signin,
    signup,
};

 