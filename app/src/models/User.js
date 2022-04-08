"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    signin() {
        const body = this.body;
        const {db_id, db_password} = UserStorage.getUserInfo(body.user_id); 
        if (db_id){
            if (db_id === body.user_id && db_password === body.user_password){
                return {success:true};
            }
            return {success:false, msg : "비밀번호가 일치하지 않습니다."};
        } 
        return {success:false, msg : "존재하지 않는 아이디 입니다."};
    }
}
 
module.exports = User;