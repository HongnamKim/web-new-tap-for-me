const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function paintGreeting(username) {
  //인사말 표시
  greeting.classList.remove(HIDDEN_CLASS);
  //argument로 받은 username으로 인사
  greeting.innerText = `Hello, ${username}.`;
}

function setUserName(event) {
  //submit으로 인한 새로고침 방지
  event.preventDefault();
  //input으로 들어온 username 값을 userName 변수 저장
  const userName = loginInput.value;
  //로그인 완료되었으니 login-form 숨기기
  loginForm.classList.add(HIDDEN_CLASS);
  //저장된 username을 localStorage에 저장
  localStorage.setItem(USERNAME_KEY, userName);
  //사용자에게 인사
  paintGreeting(userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  //저장된 username이 없음
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", setUserName);
} else {
  //저장된 username이 있음
  paintGreeting(savedUserName);
}
