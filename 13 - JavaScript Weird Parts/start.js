(() => {
  // เริ่มเขียนโค้ด

  // 1. NaN
  if(NaN*1 === NaN){
    console.log('1 ok',NaN);
  }
  const result = 1 / 'hello';
  if(Number.isNaN(result)){
    console.log('Result is NaN');
  }

  // 2. Type Coercion
  if(3 > 2 > 1){ // [3 > 2 > 1] => [true > 1] => [1 > 1 = false]
    console.log(true);
  }
  console.log(4 - '1'); // 3
  console.log(4 + Number.parseInt('1',10)); // 5
  console.log(4 + '1'); // 41
  console.log(true+true); // 2

  // 3. Interpreter & Compiler
  function getPerson1(){
    return
    {
      name : 'Deshario'
    }
  }
  function getPerson2(){
    return{
      name : 'Deshario'
    }
  }
  console.log(getPerson1()); // undefined
  console.log(getPerson2()); // { name : 'Deshario' }

  // 4. Checking Object Type
  const person1 = {};
  const person2 = null;
  console.log(typeof person1); // object
  console.log(typeof person2); // object
  if(typeof person2 == 'object' && person2 != null){ // Check Null also
    console.log('Person2 is object');
  }

})();
