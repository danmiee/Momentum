/* 해결과제 : Delete 반영
  > 유저가 어떤걸 삭제했는지 알고 지워야함
  1. newTodo에 id 부여하기
  2. X버튼에 id 부여하기
  3. id로 Delete하기
    1) filter로 새 배열 만들기
    2) toDos 배열 새 배열로 바꾸기
*/

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // li.id와 다른 toDo.id는 남겨두기
    // type이 일치해야 비교 가능
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");

  button.innerText = "🗑";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handletoDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handletoDoSubmit);

function sayHello(item) {
  console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
  toDos = parsedToDos;
}

/*
  array에서 삭제란?
  지우고 싶은 요소를 빼고 새로운 array를 만드는 것

  filter 활용
  - 배열의 요소에 대한 boolean값을 반환하는 조건함수 생성
  - 객체배열에 filter함수로 조건적용
  - true : 호출 / false > 제외
*/
