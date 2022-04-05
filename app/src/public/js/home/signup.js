"use strict";

function signup() {
    var signupForm = document.signupForm;
    var id = signupForm.user_id;
    var password = signupForm.user_password;
    var passwordCheck = signupForm.user_passwordCheck;
    var name = signupForm.user_name;
    var email = signupForm.user_email;
  
    // 빈 양식이 있는지 확인
    if (id.value == "" || password.value == "" || passwordCheck.value == "" || name.value == "" || email.value =="") {
      alert('양식을 채워주세요.');
      return false;
    }
    else {
      if (password.value != passwordCheck.value){
        alert("비밀번호가 일치 하지 않습니다.");
        password.focus();
        return false;
      }
      if(validEmailCheck(email)==false){
        alert('올바른 이메일 주소를 입력해주세요.')
        email.focus();
        return false;
      }
      else {
        alert("회원가입 성공!");
        location.href = 'index.html';
      }
    }
  }
  
  function back() {
    history.back();
  }
  
  function validEmailCheck(email){
    // email 유효성 검사를 위한 정규 표현식
    var pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return (email.value.match(pattern)!=null)
  }
  
  function signin() {
    var signupForm = document.signupForm;
    var id = signupForm.user_id;
    var password = signupForm.user_password;
    var passwordCheck = signupForm.user_passwordCheck;
    var name = signupForm.user_name;
    var email = signupForm.user_email;
  
    // 빈 양식이 있는지 확인
    if (id.value == "" || password.value == "" || passwordCheck.value == "" || name.value == "" || email.value =="") {
      alert('양식을 채워주세요.');
      return false;
    }
    else {
      if (password.value != passwordCheck.value){
        alert("비밀번호가 일치 하지 않습니다.");
        password.focus();
        return false;
      }
      if(validEmailCheck(email)==false){
        alert('올바른 이메일 주소를 입력해주세요.')
        email.focus();
        return false;
      }
      else {
        alert("회원가입 성공!");
        location.href = 'index.html';
      }
    }
  }
  