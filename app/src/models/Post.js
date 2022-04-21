"use strict";

const PostStorage = require("./PostStorage");

class Post {
    // 클라이언트에 입력된 정보 가져오기
    constructor(body) {
        this.body = body;
    }

    // 회원가입 처리
    async create() {
        const item = this.body;
        try {    
            const response = await PostStorage.save(item);
            return response; 
        } catch(err){
            return {success:false, msg: err };
        }
    }
}

module.exports = Post;