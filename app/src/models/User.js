"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    signin() {
        const client = this.body;
        const {db_id, db_password} = UserStorage.getUserInfo(client.id); 
        if (db_id){
            if (db_id === client.id && db_password === client.password){
                return {success:true};
            }
            return {success:false, msg : "비밀번호가 일치하지 않습니다."};
        } 
        return {success:false, msg : "존재하지 않는 아이디 입니다."};
    }

    signup() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response; 
    }
}
 
module.exports = User;