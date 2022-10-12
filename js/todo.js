const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

handletoDoSubmit = (event) => {
  event.preventDefault();
  console.log(toDoInput.value);   // toDoInput 값을 새로운 변수에 복사
  toDoInput.value = "";

}

toDoForm.addEventListener("submit", handletoDoSubmit);