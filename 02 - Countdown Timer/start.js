(() => {

  const second = 1000; // 1 sec = 1000 millisecond
  const minute = second*60;
  const hour = minute*60;
  const day = hour*24;
  let newYearStart = false;

  function setElementText(id,text){
    const elem = document.getElementById(id);
    elem.innerText = text;
  }

  function countDown(){
    const now = new Date().getTime();
    const newYear = new Date('December 31, 2020, 23:59:59').getTime();
    const unixTimeLeft = newYear-now;
    let dayLeft = Math.floor(unixTimeLeft/day);
    let hourLeft = Math.floor(unixTimeLeft%day / hour);
    let minLeft = Math.floor(unixTimeLeft%hour / minute);
    let secleft = Math.floor(unixTimeLeft%minute / second);
    console.log(newYearStart,dayLeft,hourLeft,minLeft,secleft);
    if(dayLeft < 0 && hourLeft < 0 && minLeft < 0 && secleft < 0){
      newYearStart = true;
    }else{
      setElementText('days',dayLeft);
      setElementText('hours',hourLeft);
      setElementText('minutes',minLeft);
      setElementText('seconds',secleft);
    }
  }

  function run(){
    let newYearCountdown = setInterval(function(){
      countDown();
      if (newYearStart === true) {
        console.log("HAPPY NEW YEAR!!");
        clearInterval(newYearCountdown);
      }
    }, 1000);
  }

  run();

})();