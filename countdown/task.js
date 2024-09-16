// const num = document.getElementById("timer");
// startTimer = parseInt(num.textContent);

// let timerInterval = setInterval(() => document.getElementById("timer").innerHTML = (startTimer-=1), 1000);

// // остановить вывод через 59 секунд
// setTimeout(() => { clearInterval(timerInterval); }, 59000);
// setTimeout(() => {alert("Вы победили в конкурсе"); }, 60000);


const num = document.getElementById("timer");
const timeLimit = parseInt(num.textContent);
let timePassed = 0;
let timeLeft = timeLimit;

function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = timeLimit - timePassed;
      document.getElementById("timer").innerHTML = formatTime(
        timeLeft
      );
  
      if (timeLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }; 
function formatTime(time) {
    let minutes = Math.floor(time / 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `00:${minutes}:${seconds}`;
  };
  startTimer();
  setTimeout(() => {alert("Вы победили в конкурсе"); }, timeLimit*1000+1000);
  setTimeout(() => {triggerDownload("https://img.freepik.com/free-photo/cute-kitten-clouds_23-2150752838.jpg?t=st=1726079071~exp=1726082671~hmac=c0e4376d091d4d38df9f5fec726528d85b9e6f0089b26fed0fe9ac76d93d5082&w=2000"); }, timeLimit*1000+1000);
//   function directDownload(url) {
//     window.location = url; // И загрузка начинается!
//   }
  function triggerDownload(fileName) {
    var element = document.createElement('a');
    element.setAttribute('href', fileName);
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    // Происходит клик, словно совершил его сам программирующий ниндзя
    element.click();
    document.body.removeChild(element);
  }