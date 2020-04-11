(() => {

  const canvas = document.getElementById('painting');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const context = canvas.getContext(`2d`);
  let previousPoint = {x:0, y:0};

  function getDistance(prev,current){
    return Math.sqrt((prev.x - current.x) ** 2 + (prev.y - current.y) ** 2);
  }

  function onMouseMoved({pageX,pageY}){
    const currentPoint = {x:pageX, y:pageY};
    const distance = getDistance(previousPoint,currentPoint);
    const opacity = Math.min(0.5,1/distance);
    context.beginPath();
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = Math.random() / distance*40;
    context.strokeStyle = `rgba(222,10,109,${opacity})`;
    context.moveTo(previousPoint.x,previousPoint.y);
    context.lineTo(currentPoint.x,currentPoint.y);
    context.stroke();
    context.closePath();
    previousPoint = currentPoint;
  }

  function onMouseEntered({pageX,pageY}){
    previousPoint.x = pageX;
    previousPoint.y = pageY;
  }
  
  function run(){
    canvas.addEventListener('mousemove',onMouseMoved);
    canvas.addEventListener('mouseenter',onMouseEntered);
  }

  run();

})();
