const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 반복되는 string을 대문자 변수로 저장해두면 컴파일러가 오타 점검해줌

// 2. onLoginSubmit 함수
onLoginSubmit = (event) => {
  // (1) 브라우저 기본동작 막기
  event.preventDefault();
  // (2) loginForm 숨기기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // (3) loginInpug.value를 username 변수로 저장
  const username = loginInput.value;
  // (4) local storage에 username값을 username키와 함께 저장
  localStorage.setItem(USERNAME_KEY, username);
  // (5) paintGreetings 함수 호출
  paintGreetings();
}

// 중복되는 내용 함수로 만들어주기
paintGreetings = () => {
  // 인자를 넣은 경우 화면에 출력되게 하는 것이 목표이므로 값을 넣어줄 수 있는 인자를 가져오면 됨
  const username = localStorage.getItem(USERNAME_KEY);
  // 함수 내에서 미리 정의하면 인자를 따로 적지 않아도 됨
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 1. localStorage
const savedUsername = localStorage.getItem(USERNAME_KEY);

// local storage에 없는 값 불러오면 null 노출
if (savedUsername === null) {
  // 저장된 값이 없으면 폼 노출(숨겨주는 클래스명 지우기)
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // submit event 발생하면 onLoginSubmit 함수 실행
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings();
}