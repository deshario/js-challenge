(() => {
  // เริ่มเขียนโค้ด

  let currentIndex = 0;

  function displayImg(imageElem,index){
    const lastIndex = imageElem.length-1;
    if(index < 0){
      index = lastIndex;
    }else if(index > lastIndex){
      index = 0;
    }
    const newImage = imageElem[index];
    newImage.scrollIntoView({behaviour:'smooth'});
    currentIndex = index;
  }

  function run(){
    const imageElem = document.querySelectorAll('img');
    const prevBtnElem = document.querySelector('.previous');
    const nextBtnElem = document.querySelector('.next');
    prevBtnElem.addEventListener('click', () => displayImg(imageElem,currentIndex-1))
    nextBtnElem.addEventListener('click', () => displayImg(Array.from(imageElem),currentIndex+1))
  }

  run();

})();
