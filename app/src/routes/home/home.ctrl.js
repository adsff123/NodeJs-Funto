// 콘트롤러 역할

"use strict";

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
}

const process = {
    signin : (req,res) => {
        const user_id = req.body.user_id;
        const user_password = req.body.user_password;

        console.log(user_id, user_password);
    },
}



module.exports = {
    output,
    process
};

 