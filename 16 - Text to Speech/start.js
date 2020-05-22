(() => {
  // เริ่มเขียนโค้ด

  const msg = new SpeechSynthesisUtterance();

  function onVoicesChanged(){
    const voices = speechSynthesis.getVoices();
    const thVoice = voices.find((voice) => voice.lang == 'th-TH');
    msg.voice = thVoice;
  }

  function onClick(event){
    msg.text = event.target.getAttribute('alt');
    speechSynthesis.speak(msg);
  }
  
  function run(){
    speechSynthesis.addEventListener('voiceschanged',onVoicesChanged);
    const imageElem = Array.from(document.querySelectorAll('img'));
    imageElem.forEach((img) => img.addEventListener('click',onClick))
  }

  run();

})();
