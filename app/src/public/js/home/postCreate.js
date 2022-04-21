// 게시글 등록 클라이언트 자바스크립트
"use strict";
 
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const createbtn = document.querySelector("#createbtn");

createbtn.addEventListener("click", createPost);

// 유효값 검증
function createPost() {
  if (!title.value){
    id.focus();
    return alert("제목을 입력해 주세요.");
  }
  if (!content.value){
    content.focus();
    return alert("내용을 입력해 주세요.");
  }
  const req = {
    title: title.value,
    content: content.value,
  };

  // 컨트롤러 + 클라이언트(회원가입) 연결
  fetch("/postsCreate", {
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
          console.error(new Error("게시글 작성 중 에러 발생")); 
    });
     
}