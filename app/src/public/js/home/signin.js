"use strict";

const user_id = document.querySelector("#user_id");
const user_password = document.querySelector("#user_password");
const signinbtn = document.querySelector("#signinbtn");

signinbtn.addEventListener("click", login);

function login() {
    const req = {
        id: user_id.value,
        pwd: user_password.value,
    };
    console.log(req);
     
}