"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

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