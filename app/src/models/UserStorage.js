// 회원 관리 모델

"use strict";

const db = require("../config/db");

class UserStorage {
    
    // // 로그인 클라이언트에서 입력 된 사용자 정보
    // static #getUserInfo(data, id)  {
    //     const users = JSON.parse(data);
    //     const idx = users.user_id.indexOf(id);
    //     const userKeys = Object.keys(users);
    //     const userInfo = userKeys.reduce((newUsers, info)=>{
    //         newUsers[info] = users[info][idx];
    //         return newUsers;
    //     }, {}); 
        
    //     return userInfo;
    // };

    // // 회원가입 클라이언트에서 입력 된 사 용자 정보
    // static #getUsers(data, isAll, fields) {
    //     const users = JSON.parse(data); 
    //     if (isAll) return users;
    //     const newUsers = fields.reduce((newUsers, field) => {
    //         if (users.hasOwnProperty(field)){
    //             newUsers[field] = users[field];
    //         }
    //         return newUsers;
    //     }, {});
    //     return newUsers;
    // };

    // 회원가입 클라이언트에서 입력된 데이터 return
    // static getUsers(isAll,  ...fields) {
    //     return fs
    //     .readFile("./src/database/users.json") 
    //     .then((data) => {
    //          return this.#getUsers(data, isAll, fields);
    //     })
    //     .catch(console.error);
    // };

    // 로그인 클라이언트에서 입력된 데이터 return
    static getUserInfo(id) { 
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM USER_INFO WHERE user_id = ? ;";
            db.query(query, [id], (err, data)=> {
                if(err) reject(`${err}`);
                resolve(data[0]);
            }); 
        });
        
    };

    // 회원가입 클라이언트에 입력된 정보 DB(파일 시스템)에 저장
    static async save(userInfo) { 
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO USER_INFO (user_id, user_password, user_name, user_email) VALUES(?, ?, ?, ?);" ;
            db.query(query, [userInfo.id, userInfo.password, userInfo.name, userInfo.email], (err)=> {
                if(err) reject(`${err}`);
                resolve({ success: true});
            }); 
        });
    };
 

}

module.exports = UserStorage; 