const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause"); 
const resetBtn = document.querySelector(".reset");

let timeLeft = 600;
let interval;


function display(){
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(Math.floor(timeLeft % 60)).padStart(2, "0");
  timer.innerHTML = minutes + ":" + seconds;
}
display();



startBtn.addEventListener("click", function(){
  if(interval){
    return;
  }
  interval = setInterval(() => {
    if(timeLeft === 0){
      clearInterval(interval);
      interval = null;
      return;
    }
    timeLeft--;
    display();
  }, 1000);
})

pauseBtn.addEventListener("click", function(){
  clearInterval(interval);
  interval = null;
  return;
})

resetBtn.addEventListener("click", function(){
  clearInterval(interval);
  interval = null;
  timeLeft = 600;
  display();
})