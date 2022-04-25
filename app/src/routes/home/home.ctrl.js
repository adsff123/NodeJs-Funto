// 클라이언트+서버 콘트롤러

"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage")

const Post = require("../../models/Post")
const PostStorage = require("../../models/PostStorage")

 // 페이지 컨트롤
const output = {
    index : (req,res) => {
        const session = req.session;
        res.render("home/index",{
            session:session
        }); 
    },
    
    signin : (req,res) => { 
        res.render("home/signin"); 
    },
    
    signup :  (req,res) => { 
        res.render("home/signup");
    }, 

    signout :  (req,res) => {
        const session = req.session;
        req.session.destroy();
        res.clearCookie('sid');
        res.render("home/index",{
            session:session
        });
    }, 

    // 게시글 목록 page
    posts : async (req,res) => {
        const post = new Post(req.body);
        const response = await post.show(req,res); 

        var skip = (response.page-1)*response.limit;
        var count = response.data.length;
        var maxPage = Math.ceil(count/response.limit);

        res.render("home/posts",{data:response.data,
                                 currentPage: response.page,
                                 limit: response.limit,
                                 maxPage: maxPage});
    },

    postsCreate : (req,res) => {
        res.render("home/postsCreate");
    },

    postsRead : async (req,res) => {
        const postsIdx = req.params.idx;
        const post = new Post(req.body);
        const response = await post.read(postsIdx);
        res.render("home/postsRead", {data:response.data});
    },

};

// 기능 컨트롤
const process = {
    // 로그인
    signin : async (req,res) => {
        const user = new User(req.body); 
        const response = await user.signin(); 
        req.session.user_id = user.body.id;
        return res.json(response); 
    },

    // 로그아웃
    signout : async (req,res) => {
        const user = new User(req.body); 
        const response = await user.signin(); 
        return res.json(response); 
    },

    // 회원가입 
    signup : async (req,res) => {
        const user = new User(req.body);
        const response = await user.signup(); 
        return res.json(response);  
    },

    // 게시글 등록 
    create : async (req,res) => {
        const post = new Post(req.body);
        const response = await post.create(); 
        return res.json(response);  
    },

    // 게시글 목록 조회
    read : async (req,res) => {
        const post = new Post(req.body);
        const response = await post.show(); 
        return res.json(response);
    },
};

module.exports = {
    output,
    process
};

  