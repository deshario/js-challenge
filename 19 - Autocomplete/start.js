(() => {
  // เริ่มเขียนโค้ด

  const carBrands = [
    'BMW',
    'Maserati',
    'Mercedes Benz',
    'mm',
    'Ferrari',
    'Toyota',
    'Honda',
    'Hyundai'
  ];
  let matchedBrands = [];
  let activeIndex = -1;

  const searchElem = document.querySelector('.search');

  function clearResults(){
    const ulElem = document.querySelector('.results');
    if(ulElem){
      document.body.removeChild(ulElem);
    }
  }

  function selectCar(event){
    clearResults();
    searchElem.value = event.target.innerText;
  }

  function createUlElement(){
    const ulElem = document.createElement('ul');
    ulElem.classList.add('results');
    return ulElem
  }

  function createLiElement(txt){
    const liElem = document.createElement('li');
    liElem.innerText = txt;
    liElem.onclick = selectCar;
    return liElem;
  }

  function onInput(event){
    clearResults();
    const inputText = event.target.value.toLowerCase();
    matchedBrands = carBrands.filter((eachBrand) => eachBrand.toLowerCase().startsWith(inputText));
    const ulElem = createUlElement();
    matchedBrands.forEach((carBrand) => {
      const li = createLiElement(carBrand);
      ulElem.append(li);
    });
    document.body.appendChild(ulElem);
  }

  function focusItem(item){
    const ulElem = document.querySelector('.results');
    if(ulElem != null){
      var liArray = Array.from(ulElem.getElementsByTagName("li"));
      liArray.map((e) => {
        if(e.innerText == item){
          searchElem.value = item;
          e.classList.add('active');
        }else{
          e.classList.remove('active');
        }
      });
    }
  }

  function onKeyDown(e){
    if(e.code == 'Escape' || e.code == 'Enter'){
      clearResults();
    }
    if(e.code == 'ArrowUp' && matchedBrands.length > 0){
      if(activeIndex < 1){
        activeIndex = matchedBrands.length-1;
      }else{
        activeIndex--;
      }
      focusItem(matchedBrands[activeIndex]);
    }
    if(e.code == 'ArrowDown' && matchedBrands.length > 0){
      if(activeIndex < matchedBrands.length-1){
        activeIndex++;
      }else{
        activeIndex = 0;
      }
      focusItem(matchedBrands[activeIndex]);
    }
  }

  function run(){
    searchElem.addEventListener('input',onInput);
    searchElem.onkeydown = onKeyDown;
    document.addEventListener('click',clearResults);
  }

  run();

})();
