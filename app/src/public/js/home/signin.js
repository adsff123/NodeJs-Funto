"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const signinbtn = document.querySelector("#signinbtn");

signinbtn.addEventListener("click", login); 

function login() {
    const req = {
        id: id.value,
        password: password.value, 
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
              password.focus();
              alert(res.msg);
          }

      })
      .catch((err)=> {
           console.error(new Error("로그인 중 에러 발생")); 
      });
     
}