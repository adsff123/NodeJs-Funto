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
         console.log(req.body);
    },
}



module.exports = {
    output,
    process
};

 