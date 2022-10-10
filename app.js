const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

onLoginSubmit = (event) => {
  event.preventDefault();
  // 첫번째 argument로 발생된 event에 대한 정보 받기 & 브라우저가 기본 동작(새로고침) 실행하지 못하게 막기
  console.log(event);
}

handleLinkClick = (event) => {
  event.preventDefault();
  console.dir(event);
}


loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// addEventListener 안의 함수는 직접 실행X > 브라우저가 동작 인식 후 알아서 실행
// 이벤트에 대한 정보(the first element - information about the event that just happened)를 가진 채로 함수를 실행시킴