const h1 = document.querySelector("div.hello:first-child h1");

handleTitleClick = () => {
  h1.style.color = "blue";
}

handleMouseEnter = () => {
  h1.innerText = "Mouse is here!";
}

handleMouseLeave = () => {
  h1.innerText = "Mouse is gone!";
}

handleWindowResize = () => {
  document.body.style.backgroundColor = "tomato";
}

handleWindowCopy = () => {
  alert("copier!");
}

handleWindowOffline = () => {
  alert("SOS no WIFI");
}

handleWindowOnline = () => {
  alert("Allllllll Goooooooood");
}

h1.addEventListener("click", handleTitleClick);
// (같은효과) h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
/*
addEventListener      이벤트 생성
.removeEventListener  이벤트 제거
onclick, onmouseenter 등으로 작성했을 때는 remove함수 없음
*/

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);