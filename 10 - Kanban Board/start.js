(() => {
  // เริ่มเขียนโค้ด

  let draggingElement;

  function onDragStart(){
    draggingElement = this;
  }

  function onDrop(){
    this.append(draggingElement); // this = dropzone Element
    draggingElement = null;
  }

  const onDragOver = event => event.preventDefault();
  const onDragEnter = event => event.preventDefault();

  function run(){
    const taskElems = Array.from(document.querySelectorAll('.task'));
    const dropZoneElem = Array.from(document.querySelectorAll('.drop-zone'));
    taskElems.forEach((eachElem) => {
      eachElem.addEventListener('dragstart',onDragStart);
    });
    dropZoneElem.forEach((eachElem) => {
      eachElem.addEventListener('drop',onDrop);
      eachElem.addEventListener('dragover',onDragOver);
      eachElem.addEventListener('dragenter',onDragEnter);
    });
  }

  run();

})();
