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

    console.log(req);

    fetch("/signin", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req), 
    })
     
}