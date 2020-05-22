(() => {
  // เริ่มเขียนโค้ด

  // 1. Class vs Prototype 

  class Person{

  }
  const deshario = new Person();
  console.log(deshario);

  // 2. What's prototype?
  const str1 = 'deshario';
  console.log(str1,str1.__proto__);

  const arr = [];
  console.log(arr,arr.__proto__);

  // 3. Prototype chain
  const user = 'deshario';
  console.log(user.__proto__);

  // 4. Extend a prototype
  const name = 'Deshario';
  function sayHello(txt){
    console.log(`Hello ${txt}`);
  }
  String.prototype.sayHello = sayHello;
  console.log(name.__proto__);
  name.sayHello('World')

})();
