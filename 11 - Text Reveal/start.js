(() => {
  // เริ่มเขียนโค้ด

  function onScroll(){
    const sectionElements = Array.from(document.querySelectorAll('section'));
    sectionElements.forEach((sectionElem) => {
      const imgElem = sectionElem.querySelector('img');
      const textElem = sectionElem.querySelector('.text');
      const scrollPosition = window.pageYOffset;
      const revealPosition = imgElem.offsetTop + imgElem.offsetHeight / 10;
      // imgElem.offsetTop = image top position  
      // imgElem.offsetHeight = imageHeight
      if(scrollPosition >= revealPosition){
        textElem.classList.add('reveal');
      }
    })
  }

  function run(){
    document.addEventListener('scroll',onScroll);
  }

  run();

})();
