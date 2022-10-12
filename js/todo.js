const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

saveToDos = (event) => {
  // localStage는 array 저장불가, text만 저장가능
  // JSON.stringify : object, array, 어떤 코드든 String으로 만들어줌
  localStorage.setItem("todos", JSON.stringify(toDos));
}

deleteToDo = (event) => {
  const li = event.target.parentElement;
  li.remove();
}

paintToDo = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");

  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  // append는 항상 마지막에
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

handletoDoSubmit = (event) => {
  event.preventDefault();
  const newTodo = toDoInput.value;   // toDoInput 값을 새로운 변수에 복사
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handletoDoSubmit);