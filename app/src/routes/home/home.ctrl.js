// 콘트롤러 역할

"use strict";

const User = require("../../models/User");
 const UserStorage = require("../../models/UserStorage")

const output = {
    index : (req,res) => { 
        res.render("home/index"); 
    },
    
    signin : (req,res) => { 
        res.render("home/signin"); 
    },
    
    signup :  (req,res) => { 
        res.render("home/signup");
    }, 
};

const process = {
    signin : (req,res) => {
        const user = new User(req.body); 
        const response = user.signin(); 
        return res.json(response); 
    },

    signup : (req,res) => {
        const user = new User(req.body);
        const response = user.signup(); 
        return res.json(response);  
    }
};

module.exports = {
    output,
    process
};

  