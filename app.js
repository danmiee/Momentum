const title = document.querySelector("div.hello:first-child h1");

handleTitleClick = () => {
  console.log("title was clicked!");
}

title.addEventListener("click",handleTitleClick);

handleTitleClick()