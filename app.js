const h1 = document.querySelector("div.hello:first-child h1");

handleTitleClick = () => {
  /*
  className : class명 교체
  classList : 특정 class명만 수정 가능
  */
 
 // toggle은 아래 5줄의 코드와 같은 역할을 함
 h1.classList.toggle("clicked");
  // const clickedClass = "clicked";
  // if(h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }
}

h1.addEventListener("click", handleTitleClick);