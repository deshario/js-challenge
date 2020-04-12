(() => {
  
    let timeout;
    let cheats = ['panzer','aspirine','nuttertools'];
    let typed = [];
    
    const onKeyUp = (event) => {
      clearTimeout(timeout);
      if(event.code == 'Space'){
        typed = [];
      }else{
        typed.push(event.key)
      }

      let typedCode = typed.join(' ').replace(/\s/g, '');
      let matchedCode = cheats.find((e) => {
        return typedCode == e;
      });
      
      if(matchedCode){
        typed = [];
        console.log('===== GTA CHEAT ACTIVATED =====');
        console.log(matchedCode,'\n');
        startSnowing();
      }
   
      // Reset user input if they took too long
      timeout = setTimeout(() => {
        typed = [];
        // console.log('Timeout');
      }, 2000); // Amount of time allowed between button typed
      
    };
  
    document.addEventListener('keyup', onKeyUp);

    setTimeout(() => {
      alert('1. Enter Konami Code or [GTA Vice City] cheat');
    },1000); // PRESS_DELAY
  
  })();
  
  // https://gist.github.com/csbarnes/7962049c6b03486894c7635696e4724a