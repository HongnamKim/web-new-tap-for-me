const mainForm = document.getElementById("main-todo-form");
const mainInput = document.querySelector("#main-todo-form input");
const mainToDoText = document.querySelector("#main-todo-text");
const mainToDoList = document.querySelector("#main-todo");
const mainToDoReset = document.querySelector("#main-todo-reset");

//const HIDDEN_CLASS = "hidden";
const MAINTODO_KEY = "mainToDo";

function handleMainSubmit(event) {
  event.preventDefault();
  const mainToDo = mainInput.value;
  localStorage.setItem(MAINTODO_KEY, mainToDo);
  mainForm.classList.add(HIDDEN_CLASS);

  paintMainToDo(mainToDo);
}

function paintMainToDo(mainToDo) {
  mainToDoList.innerText = mainToDo;
  mainToDoText.classList.remove(HIDDEN_CLASS);
  mainToDoList.classList.remove(HIDDEN_CLASS);
  mainToDoReset.classList.remove(HIDDEN_CLASS);
}

function resetMainToDo() {
  console.log("reset clicked");
  localStorage.removeItem(MAINTODO_KEY);
  location.reload();
}

const savedMainToDo = localStorage.getItem(MAINTODO_KEY);

if (savedMainToDo === null) {
  mainForm.classList.remove(HIDDEN_CLASS);
  mainForm.addEventListener("submit", handleMainSubmit);
} else {
  paintMainToDo(savedMainToDo);
}

mainToDoReset.addEventListener("click", resetMainToDo);
