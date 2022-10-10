const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// string만 포함된 변수는 대문자 표기

onLoginSubmit = (event) => {
  event.preventDefault();
  // 로그인폼 숨기기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 유저이름 변수로 저장
  const username = loginInput.value;
  // 유저이름 h1에 넣기
  // greeting.innerText = "Hello, " + username;
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);