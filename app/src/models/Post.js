"use strict";

const PostStorage = require("./PostStorage");

class Post {
    // 클라이언트에 입력된 정보 가져오기
    constructor(body) {
        this.body = body;
    }

    // 로그인 처리
    async show(req, res) {
        const client = this.body;
        try {    
            const response = await PostStorage.getPostInfo(req,res);
            return response; 
        } catch(err){
            return {success:false, msg: err };
        }
    }

    // 게시글 등록 처리
    async create() {
        const item = this.body;
        try {    
            const response = await PostStorage.createPost(item);
            return response; 
        } catch(err){
            return {success:false, msg: err };
        }
    }
}

module.exports = Post;