(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  function simulateAsyncAPI(text, timeout){
    setTimeout(() => console.log(text),timeout);
  }
  simulateAsyncAPI('A',1000);
  simulateAsyncAPI('B',500);
  simulateAsyncAPI('C',100);

  // 2. Callback
  function simulateAsyncAPI(text,timeout,callback){
    setTimeout(() => {
      console.log(text);
      if(callback){
        callback();
      }
    },timeout);
  }

  // Callback hell
  simulateAsyncAPI('D',1000,() => {
    simulateAsyncAPI('E',500,() => {
      simulateAsyncAPI('F',100);
    })
  })

  // 3. Promise
  function simulateAsyncAPI(text,timeout){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if(text == 'H') return reject('H is not the member of cybertron');
        console.log(text);
        resolve();
      },timeout);
    });
  }

  simulateAsyncAPI('G',1000)
    .then(() => {
      return simulateAsyncAPI('H',100);
    })
    .then(() => {
      return simulateAsyncAPI('I',500);
    })
    .catch((err) => {
      console.error(err);
    });

  // 4. Async/Await
  function simulateAsyncAPI(text,timeout){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        // if(text == 'B') return reject('B is not the member of cybertron');
        console.log(text);
        resolve();
      },timeout);
    });
  }

  async function run(){
    try{
      await simulateAsyncAPI('J',100);
      await simulateAsyncAPI('K',50);
      await simulateAsyncAPI('L',10);
    }catch(err){
      console.error(err);
    }
  }
 
  run();


})();
