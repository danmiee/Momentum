const title = document.querySelector("div.hello h1");

handleTitleClick = () => {
  console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);

handleTitleClick()