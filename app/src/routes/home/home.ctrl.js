// 콘트롤러 역할

"use strict";

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
        const user_id = req.body.user_id;
        const user_password = req.body.user_password;

        const users = UserStorage.getUsers("db_id", "db_password");
        
        const response = {};
        if (users.db_id.includes(user_id)) {
            const idx = users.db_id.indexOf(user_id);
            if (users.db_password[idx] === user_password){
                response.success = true; 
                return res.json(response);
            }
        } 
        
        response.success = false; 
        response.msg = "로그인 실패";
        return res.json(response);
    }
};



module.exports = {
    output,
    process
};

  