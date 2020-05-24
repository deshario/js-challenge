(() => {
   
  function run(){
        
    const persons = [
        {name:'Robert', age:10},
        {name:'Santiago', age:20},
        {name:'Hinger', age:30},
        {name:'Cleo', age:40},
    ];
        
    const multiplyAge = persons.map((person) => ({
      ...person,
      age : person.age*2
    }));

    console.log('Original Map : ',multiplyAge);

    function myMap(arr, callback){
      const result = [];
      for(let i=0; i<arr.length; i++){
        const elem = arr[i];
        result.push(callback(elem));
      }
      return result;
    }

    const newPersons = myMap(persons,person => ({
      ...person,
      age : person.age*2
    }));

    console.log('Normal Map Function : ',newPersons);

    Array.prototype.newMap = function newMap(callback){
      const result = [];
      for(let i=0; i<this.length; i++){
        const elem = this[i];
        result.push(callback(elem));
      }
      return result;
    }

    const hocResults = persons.newMap((person) => ({
      ...person,
      age : person.age*2
    }));

    console.log('Custom HOC Map : ',hocResults);

  }

  run();

})();