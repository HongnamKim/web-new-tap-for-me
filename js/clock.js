const clock = document.querySelector("#clock");

function sayClock() {
  const date = new Date();
  let hours = date.getHours();
  let afternoon = "AM";
  if (hours >= 12) {
    afternoon = "PM";
    if (hours >= 13) {
      hours = hours - 12;
    }
  }
  hours = String(hours).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${afternoon} ${hours}:${minutes}:${seconds}`;
}

sayClock();
setInterval(sayClock, 1000);
