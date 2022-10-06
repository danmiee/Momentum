const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

handleTitleClick = () => {
  title.style.color = "blue";
}

handleMouseEnter = () => {
  title.innerText = "Mouse is here!";
}

handleMouseLeave = () => {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);