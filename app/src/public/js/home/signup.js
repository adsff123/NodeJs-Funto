"use strict";
 
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");
const name = document.querySelector("#name");
const email = document.querySelector("#email");

const signupbtn = document.querySelector("#signupbtn");

signupbtn.addEventListener("click", signup);

function signup() {
  const req = {
    id: id.value,
    password: password.value, 
    passwordCheck: passwordCheck.value,
    name: name.value,
    email: email.value,
  };

    console.log(req);
    

    // fetch("/signup", {
    //     method: "post",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(req), 
    // }).then((res) => res.json()) 
    //   .then((res) => {
    //       if (res.success){
    //           location.href = '/signin';
    //       }
    //       else {
    //           password.focus();
    //           alert(res.msg);
    //       }

    //   })
    //   .catch((err)=> {
    //        console.error(new Error("회원가입 중 에러 발생")); 
    //   });
     
}