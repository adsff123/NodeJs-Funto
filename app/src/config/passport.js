
"use strict";

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy; // 1
const User = require("./db");

// serialize & deserialize User // 2
passport.serializeUser(function(flag, user, done) {
    console.log("###2### serializeUser ", user)
    done(null, user.user_id);
});

passport.deserializeUser(function(id, done) {
    // console.log("###3### deserializeUser id ", id)
    var userinfo;
    var query = 'SELECT * FROM USER_INFO WHERE user_id=?;';
    User.query(query , [id], function (err, result) {
      if(err) console.log('mysql 에러');     
     
    //   console.log("###4### deserializeUser mysql result : " , result);
      var json = JSON.stringify(result[0]);
      userinfo = JSON.parse(json);
    //   console.log("###5###", userinfo);
      done(null, userinfo);
    });    
});

// local strategy // 3
passport.use('local-login',
  new LocalStrategy({
      usernameField : 'id', // 3-1
      passwordField : 'password', // 3-1
      passReqToCallback : true
    },
    function(req, username, password, done) { // 3-2
        var query = "SELECT * FROM USER_INFO WHERE user_id = ? ;";
        User.query(query, [username], (err,result)=>{
            if(err) console.log("mysql 연결에러");
            if(result.length===0){
                console.log("존재하지 않는 아이디 입니다.");
                return done(null, false, { message: '존재하지 않는 아이디 입니다.' });
            }
            else{
                if(result[0].user_id === username && result[0].user_password === password){
                    var json = JSON.stringify(result[0]);
                    var userinfo = JSON.parse(json);
                    // console.log("###1### userinfo " + userinfo);
                    return done(null, userinfo);  // result값으로 받아진 회원정보를 return해줌
                }
                else{
                    console.log("비밀번호가 일치하지 않습니다.")
                    return done(null, false, {message: '비밀번호가 일치하지 않습니다.'});
                }
            };

        })
    }
  )
);

module.exports = passport;