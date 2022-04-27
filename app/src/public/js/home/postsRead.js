// 게시글 등록 클라이언트 자바스크립트
"use strict";
 
const post_seq = document.querySelector("#post_seq");
const deletebtn = document.querySelector("#deletebtn");

deletebtn.addEventListener("click", deletePost);

// 유효값 검증
function deletePost() {
  const req = {
    post_seq: post_seq.value,
  };
  console.log(req);

  // 컨트롤러 + 클라이언트(게시글 작성) 연결
  fetch("/postsDelete", {
      method: "post",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(req),
  }).then((res) => res.json()) 
    .then((res) => {
        if (res.success) {
            location.href = '/posts';
        }
        else {
            alert(res.msg);
        }

    })
    .catch((err)=> {
          console.error(new Error("게시글 삭제 중 에러 발생")); 
    });
     
}