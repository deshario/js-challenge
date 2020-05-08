(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope
  // function printName(){
  //   console.log(this)
  // }

  // 2. How to know what is "this"?
  function printName(){
    console.log(this);
    console.log(`My Name is ${this.name}`);
  }

  //// 2.1 Invoker object
  // const user1 = {name:'Sunil', printName};
  // const user2 = {name:'Deshar', printName};

  // printName();
  // user1.printName();
  // user2.printName();

  //// 2.2 Global object (window, global)
  // name = 'Glsssobal';
  // printName();

  //// 2.3 Constructor function
  // function Person(name){
  //   this.name = name;
  //   this.printName = printName;
  // }

  // const deshario = new Person('Sunil Deshar');
  // deshario.printName();

  // 3. call(), apply(), and bind()
  
  function printName(nationality,city){
    console.log(this);
    console.log(`My name is ${this.name}, I'm ${nationality} and i'm living in ${city}`);
  }

  function Person(name,nationality,city){
    this.name = name;
    this.nationality = nationality;
    this.city = city;

    printName(this.nationality,this.city);
    printName.call(this, this.nationality, this.city);
    printName.apply(this, [this.nationality, this.city])

    const printDeshario = printName.bind(this);
    printDeshario(this.nationality, this.city);

  }

  const deshario = new Person('Deshario','Nepalese','Kathmandu');

})();
