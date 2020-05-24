(() => {
  // เริ่มเขียนโค้ด
  
  const KEY = 'xLV7apSzuTa3O1vadwm2-_9lmUf6AveuoNvpcekd8Sc';
  const loaderElem = document.querySelector('.loader');
  let page = 1;

  function showLoader(isShow = true){
    isShow ? loaderElem.classList.add('visible') : loaderElem.classList.remove('visible');
  }
  
  async function displayImages(){
    showLoader(true);
    const result = await fetch(`https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`);
    const images = await result.json();

    const galleryElem = document.querySelector('.gallery');

    images.forEach((image) => {
      const imgElem = document.createElement('img');
      const {urls:{small}} = image;
      imgElem.src = small;
      galleryElem.appendChild(imgElem);
    });

    showLoader(false);
    page++;
  }

  function onScroll(){
    const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight - 10){
      displayImages();
    }
    // clientHeight = current screen height | Always Fixed
    // scrollTop = scroll Position
    // scrollHeight = total height from top to bottom
    // scrollTop+clientHeight = bottom of screen
  }
  
  function run(){
    document.addEventListener('scroll',onScroll);
    displayImages();
  }

  run();

})();
