// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// loginForm이 html의 요소라서 그 안에서 input과 button을 찾을 수 있음

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

/*
onLoginBtnClick = () => {
  const username = loginInput.value;
  // 유효성검사 연습
    if (username === "") {
      alert("Please write your name");
    } else if(username.length>15) {
      alert ("Your name is too long.")
    }
    // html에서 input 속성으로 제한 가능
    // (단, input이 form의 자식요소일 때만 적용됨)
  
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
// button이 아닌 submit타입 input으로 작성 가능
*/