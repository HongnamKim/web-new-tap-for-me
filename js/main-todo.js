const mainForm = document.getElementById("main-todo-form");
const mainInput = document.querySelector("#main-todo-form input");
const mainToDoText = document.querySelector("#main-todo-text");
const mainToDoList = document.querySelector("#main-todo");
const mainToDoEdit = document.querySelector("#main-todo-edit");

//const HIDDEN_CLASS = "hidden";
const MAINTODO_KEY = "mainToDo";
const MAINTODO_DATE = "mainToDoDate";

//main todo 및 작성 날짜를 localStorage에 저장
function saveMainToDo(event) {
  event.preventDefault();
  const mainToDo = mainInput.value;
  const date = new Date();
  const mainToDoDate = date.getDate();

  localStorage.setItem(MAINTODO_KEY, mainToDo);
  localStorage.setItem(MAINTODO_DATE, mainToDoDate);
  mainForm.classList.add(HIDDEN_CLASS);

  paintMainToDo(mainToDo);
}

//main todo 출력
function paintMainToDo(mainToDo) {
  mainToDoList.innerText = mainToDo;
  mainToDoText.classList.remove(HIDDEN_CLASS);
  mainToDoList.classList.remove(HIDDEN_CLASS);
  mainToDoEdit.classList.remove(HIDDEN_CLASS);
}

function editMainToDo() {
  localStorage.removeItem(MAINTODO_KEY);
  localStorage.removeItem(MAINTODO_DATE);

  mainForm.classList.remove(HIDDEN_CLASS);
  mainToDoText.classList.add(HIDDEN_CLASS);
  mainToDoList.classList.add(HIDDEN_CLASS);
  mainToDoEdit.classList.add(HIDDEN_CLASS);
}

function checkDateChange() {
  const tomorrow = new Date();
  if (tomorrow.getDate() !== parseInt(localStorage.getItem(MAINTODO_DATE))) {
    editMainToDo();
  }
}

const savedMainToDo = localStorage.getItem(MAINTODO_KEY);

if (savedMainToDo === null) {
  mainForm.classList.remove(HIDDEN_CLASS);

  mainForm.addEventListener("submit", saveMainToDo);

  setInterval(checkDateChange, 1000);
} else {
  paintMainToDo(savedMainToDo);

  setInterval(checkDateChange, 1000);
}

mainToDoEdit.addEventListener("click", editMainToDo);
