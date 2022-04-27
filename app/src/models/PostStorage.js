// 회원 관리 모델

"use strict";

const db = require("../config/db");

class PostStorage {

    static async getPostInfo(req, res) {
        return new Promise((resolve, reject) => {
            
            // 페이지네이션을 위한 처리
            var page = Math.max(1, parseInt(req.query.page)); 
            var limit = Math.max(1, parseInt(req.query.limit));
            page = !isNaN(page)?page:1;
            limit = !isNaN(limit)?limit:5;

            // db에서 게시글 처리
            const query = "SELECT post_seq, post_title, post_writer, date_format(post_in_date,'%Y-%m-%d') post_in_date FROM POSTS;";
            db.query(query, (err, data)=> {
                if(err) reject(`${err}`);
                resolve({success: true, 
                         data:data,
                         page:page,
                         limit:limit});
            });
        });
    };

    // 회원가입 클라이언트에 입력된 정보 DB(파일 시스템)에 저장
    static async createPost(item, userInfo) { 
        return new Promise((resolve, reject) => {
            console.log(item);
            console.log(userInfo);
            const query = "INSERT INTO POSTS (post_title, post_content, post_writer) VALUES(?, ?, ?);" ;
            db.query(query, [item.title, item.content, userInfo.user_id], (err)=> {
                if(err) reject(`${err}`);
                resolve({ success: true});
            }); 
        });
    };

    static async readPost(postsIdx) {
        return new Promise((resolve, reject) => {
            const query = "SELECT post_seq, post_title, post_content, post_writer, date_format(post_in_date,'%Y-%m-%d') post_in_date FROM POSTS WHERE post_seq = ?;";
            db.query(query, [postsIdx], (err, data)=> {
                if(err) reject(`${err}`);
                resolve({success: true, data:data});
            });
        });
    };
 

}

module.exports = PostStorage; 