
"use strict";

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy; // 1
const User = require("./db");

// serialize & deserialize User // 2
passport.serializeUser(function(user, done) {
    console.log("###4### serializeUser ", user)
    done(null, user.user_id);
});
passport.deserializeUser(function(id, done) {
    console.log("###5### deserializeUser id ", id)
    var userinfo;
    var query = 'SELECT * FROM USER_INFO WHERE user_id=?;';
    User.query(query , [id], function (err, result) {
      if(err) console.log('mysql 에러');     
     
      console.log("###6### deserializeUser mysql result : " , result);
      var json = JSON.stringify(result[0]);
      userinfo = JSON.parse(json);
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
        console.log("###1### "+username);
        User.query(query, [username], (err,result)=>{
            if(err) console.log("mysql 연결에러");
            if(result.length===0){
                console.log("결과없음");
                return done(null, false, { message: 'Incorrect' });
            }else{
                var json = JSON.stringify(result[0]);
                var userinfo = JSON.parse(json);
                console.log("###3### userinfo " + userinfo);
                return done(null, userinfo);  // result값으로 받아진 회원정보를 return해줌
            };

        })
    }
  )
);

module.exports = passport;