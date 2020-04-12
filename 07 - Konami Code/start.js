(() => {

  const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ];

  let index = 0;

  const onKeyDown = (event) => {
    event.key == konamiCode[index] ? index++ : index = 0;
    if(konamiCode.length == index){
      startSnowing();
    }
  }

  const run = () => {
    document.addEventListener('keydown',onKeyDown)
  }

  run();

})();
