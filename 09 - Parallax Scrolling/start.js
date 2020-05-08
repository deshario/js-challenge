(() => {
  // เริ่มเขียนโค้ด

  function onScroll(){
    const moonElem = document.querySelector('.moon');
    const wishElem = document.querySelector('.wish');
    moonElem.style.transform = `translate(${window.scrollY * 0.7}%, ${window.scrollY * -0.7}%)`; // X Go Right % Y Go Up
    wishElem.style.transform = `translateY(${window.scrollY * -1.2}%)`; // Go Up
    // TranslateX = More Right && Less Left
    // TranslateY = More Up && Less Down
  }

  function run(){
    document.addEventListener('scroll',onScroll);
  }

  run();

})();