const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

// JSON.parse : 배열로 반환

function saveToDos() {
  // localStage는 array 저장불가, text만 저장가능
  // JSON.stringify : object, array, 어떤 코드든 String으로 만들어줌
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
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

function handletoDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;   // toDoInput 값을 새로운 변수에 복사
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handletoDoSubmit);

function sayHello(item) {
  console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  
  // 함수를 따로 만들지 않고 화살표 함수 사용
    // parsedToDos에 있는 각각의 item에 대해 => 뒤 내용을 실행
  parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}