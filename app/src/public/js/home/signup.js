"use strict";
 
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");
const name = document.querySelector("#name");
const email = document.querySelector("#email");

const signupbtn = document.querySelector("#signupbtn");

signupbtn.addEventListener("click", signup);

function signup() {
  if (!id.value){
    id.focus();
    return alert("아이디를 입력해 주세요.");
  }
  if (password !==  passwordCheck) {
    password.focus();
    return alert("비밀번호가 일치 하지 않습니다.");
  }
  if (!name.value){
    name.focus();
    return alert("이름을 입력해 주세요.");
  }
  if (!email.value){
    email.focus();
    return alert("이메일을 입력해 주세요.");
  }
  const req = {
    id: id.value,
    password: password.value,
    name: name.value,
    email: email.value,
  };

    fetch("/signup", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req), 
    }).then((res) => res.json()) 
      .then((res) => {
          if (res.success) {
              location.href = '/signin';
          }
          else {
              alert(res.msg);
          }

      })
      .catch((err)=> {
           console.error(new Error("회원가입 중 에러 발생")); 
      });
     
}