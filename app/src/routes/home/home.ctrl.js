// 클라이언트+서버 콘트롤러

"use strict";

const User = require("../../models/User");
 const UserStorage = require("../../models/UserStorage")

 // 페이지 컨트롤
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

// 기능 컨트롤
const process = {
    // 로그인
    signin : async (req,res) => {
        const user = new User(req.body); 
        const response = await user.signin(); 
        return res.json(response); 
    },

    // 회원가입 
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

  