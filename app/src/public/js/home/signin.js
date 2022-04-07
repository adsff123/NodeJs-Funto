"use strict";

const user_id = document.querySelector("#user_id");
const user_password = document.querySelector("#user_password");
const signinbtn = document.querySelector("#signinbtn");

signinbtn.addEventListener("click", login); 

function login() {
    const req = {
        user_id: user_id.value,
        user_password: user_password.value, 
    };

    fetch("/signin", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req), 
    }).then((res) => res.json())
      .then((res) => {
          if (res.success){
              location.href = '/';
          }
          else {
              user_password.focus();
              alert(res.msg);
          }

      })
      .catch((err)=> {
           console.error(new Error("로그인 중 에러 발생")); 
      });
     
}