export default function(){

  const buttonPlay = document.querySelector(".play");
  const buttonStop = document.querySelector(".stop");
  const buttonPlus = document.querySelector(".plus");
  const buttonMinus = document.querySelector(".minus");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");
  let minutesDisplay = minutes.textContent;
  let secondsDisplay = seconds.textContent;
  let timerTimeOut;

  function disablePlay() {
    buttonPlay.disabled =true;
  }
  
  function disablePlayfalse() {
    buttonPlay.disabled = false;
  }
  
  buttonPlay.addEventListener('click', function countdown (){
      timerTimeOut= setTimeout(function (){
      let newminutes = Number(minutes.textContent);
      let newseconds = Number(seconds.textContent);
    
      if(newseconds<= 0 && newminutes <=0){
        return
      }
      if(newseconds<=0){
        newseconds =60;
        newminutes--
      }
      newseconds = newseconds -1;
      minutes.textContent = String(newminutes);
      seconds.textContent = String(newseconds);
      
      countdown();
    },1000)
    disablePlay();
  });
  
  buttonStop.addEventListener('click', function(){
    clearTimeout(timerTimeOut);
    minutes.textContent = minutesDisplay;
    seconds.textContent = secondsDisplay;
    disablePlayfalse ()
  
  })
  
  buttonPlus.addEventListener('click', function(){
    minutes.textContent = String(Number(minutes.textContent) + 5);
    minutesDisplay = String(Number(minutesDisplay) + 5);
  })
  
  buttonMinus.addEventListener('click', function(){
    minutes.textContent = String(Number(minutes.textContent)- 5);
    minutesDisplay = String(Number(minutesDisplay) - 5);
    
  })
}