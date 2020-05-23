(() => {
  // เริ่มเขียนโค้ด

  function displayError(elem,message){
    const smallElem = elem.parentElement.querySelector('small');
    smallElem.innerText = message;
    elem.classList.add('invalid');
    form.classList.add('invalid');
  }
  
  function displaySuccess(){
    document.body.innerHTML = '';
    const pElem = document.createElement('p');
    pElem.innerText = 'Login Success';
    pElem.classList.add('success');
    document.body.appendChild(pElem);
  }

  function resetState(elem){
    const smallElem = elem.parentElement.querySelector('small');
    smallElem.innerText = '';
    elem.classList.remove('invalid');
    form.classList.remove('invalid');
  }

  function validateLength(elem,min,max){
    const val = elem.value;
    if(val.length < min || val.length > max){
      const elemName = elem.getAttribute('name');
      displayError(elem,`${elemName} length must be between ${min} and ${max}`)
    }
  }

  function validateEmail(elem){
    const regex = /\S+@\S+\.\S+/;
    if(!regex.test(elem.value)){
      displayError(elem,'Invalid Email');
    }
  }

  function validateForm(event){
    event.preventDefault(); 
    const emailElem = document.getElementById('email');
    const passElem = document.getElementById('password');
    resetState(emailElem);
    resetState(passElem);
    validateLength(emailElem,10,20);
    validateLength(passElem,8,20);
    validateEmail(emailElem);
    
    const isFormValid = !form.classList.contains('invalid');
    if(isFormValid){
      displaySuccess();
    }
  }

  function run(){
    const formElem = document.querySelector('form');
    formElem.addEventListener('submit',validateForm)
  }

  run();

})();
