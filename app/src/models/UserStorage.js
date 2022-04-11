// 회원 관리 모델

"use strict";

const fs = require("fs").promises;

class UserStorage {
    
    // 로그인 클라이언트에서 입력 된 사용자 정보
    static #getUserInfo(data, id)  {
        const users = JSON.parse(data);
        const idx = users.db_id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUsers, info)=>{
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {}); 
        
        return userInfo;
    };

    // 회원가입 클라이언트에서 입력 된 사용자 정보
    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data); 
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };

    // 회원가입 클라이언트에서 입력된 데이터 return
    static getUsers(isAll,  ...fields) {
        return fs
        .readFile("./src/database/users.json") 
        .then((data) => {
             return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);
    };

    // 로그인 클라이언트에서 입력된 데이터 return
    static getUserInfo(id) {
        // const users = this.#users;
        return fs
        .readFile("./src/database/users.json") 
        .then((data) => {
             return this.#getUserInfo(data, id);
        })
        .catch(console.error);

    };

    // 회원가입 클라이언트에 입력된 정보 DB(파일 시스템)에 저장
    static async save(userInfo) { 
        const users = await this.getUsers(true);
        if (users.db_id.includes(userInfo.id) ){
            throw  "이미 존재하는 아이디 입니다.";
        }
        users.db_id.push(userInfo.id);
        users.db_password.push(userInfo.password);
        users.db_name.push(userInfo.name);
        users.db_email.push(userInfo.email);
        console.log(users);
        fs.writeFile("./src/database/users.json", JSON.stringify(users) ); 
        return {success:true};
    };
 

}

module.exports = UserStorage; 