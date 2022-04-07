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
};

const users = {
    db_id: ["adsff123", "mike", "josh", "joey", "danny", "heather"],
    db_password: ["1234", "1234", "1234", "1234", "1234", "1234"], 
};

const process = {
    signin : (req,res) => {
        const user_id = req.body.user_id;
        const user_password = req.body.user_password;

        if (users.db_id.includes(user_id)) {
            const idx = users.db_id.indexOf(user_id);
            if (users.db_password[idx] === user_password){
                return res.json({
                    sucess: true,
                });
            }
        }

        return res.json({
            sucess : false,
            msg: "로그인 실패",
        });
    }
};



module.exports = {
    output,
    process
};

  