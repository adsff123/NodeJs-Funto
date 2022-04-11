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
    signin : async (req,res) => {
        const user = new User(req.body); 
        const response = await user.signin(); 
        return res.json(response); 
    },

    signup : async (req,res) => {
        const user = new User(req.body);
        const response = await user.signup(); 
        return res.json(response);  
    }
};

module.exports = {
    output,
    process
};

  