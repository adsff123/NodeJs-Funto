"use strict";

const UserStorage = require("./UserStorage");

class User {
    // 클라이언트에 입력된 정보 가져오기
    constructor(body) {
        this.body = body;
    }

    // 로그인 처리
    async signin() {
        const client = this.body;
        const {db_id, db_password} = await UserStorage.getUserInfo(client.id); 
           
        if (db_id){
            if (db_id === client.id && db_password === client.password){
                return {success:true};
            }
            return {success:false, msg : "비밀번호가 일치하지 않습니다."};
        } 
        return {success:false, msg : "존재하지 않는 아이디 입니다."};
    }

    // 회원가입 처리
    async signup() {
        const client = this.body;
        try {    
            const response = await UserStorage.save(client);
            return response; 
        } catch(err){
            return {success:false, msg: err };
        }
    }
}
 
module.exports = User;