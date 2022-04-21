// 회원 관리 모델

"use strict";

const db = require("../config/db");

class PostStorage {

    // 회원가입 클라이언트에 입력된 정보 DB(파일 시스템)에 저장
    static async save(item) { 
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO POSTS (post_title, post_content) VALUES(?, ?);" ;
            db.query(query, [item.title, item.content], (err)=> {
                if(err) reject(`${err}`);
                resolve({ success: true});
            }); 
        });
    };
 

}

module.exports = PostStorage; 