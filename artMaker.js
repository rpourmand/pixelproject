window.onload = function() {
    let container = document.createElement('div');
    container.style.height = '200px';
    container.style.width = '200px';
    container.style.backgroundColor = 'white';
    container.style.margin = 'auto';
    container.style.display = 'grid';
    container.style.gridTemplate = 'repeat(20, 1fr) / repeat(20, 1fr)';

    let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    for(let color of colorChoices) {
        let box = document.createElement('div');
        box.style.border = '1px solid black';
        box.style.width = '8px';
        box.style.height = '8px';
        box.style.backgroundColor = color;
        this.document.body.appendChild(box);
    }
    
  
    for(let i = 0; i < 400; i++) {
      let box = document.createElement('span');
      box.style.border = '1px solid black';
      box.style.width = '8px';
      box.style.height = '8px';
      container.appendChild(box);
    }

    document.body.appendChild(container);  
}

  
  