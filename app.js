const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

onLoginSubmit = (event) => {
  event.preventDefault();
  // 첫번째 argument로 발생된 event에 대한 정보 받기 & 브라우저가 기본 동작(새로고침) 실행하지 못하게 막기
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);

// 자바스크립트는 정보를 가진 채로 함수를 실행시킴