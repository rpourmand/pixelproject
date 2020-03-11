window.onload = function() {
  let activeColor = 'white';  
  let container = document.createElement('div');
    container.style.height = '400px';
    container.style.width = '400px';
    container.style.backgroundColor = 'white';
    container.style.margin = 'auto';
    container.style.display = 'grid';
    container.style.gridTemplate = 'repeat(20, 1fr) / repeat(20, 1fr)';

    let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    for(let color of colorChoices) {
        let box = document.createElement('div');
        box.style.border = '2px solid black';
        box.style.width = '16px';
        box.style.height = '16px';
        box.style.backgroundColor = color;
        box.addEventListener('click', function(event) {
          activeColor = box.style.backgroundColor;
        });
        this.document.body.appendChild(box);
    }
    
  
    for(let i = 0; i < 400; i++) {
      let box = document.createElement('span');
      box.style.border = '2px solid black';
      box.style.width = '16px';
      box.style.height = '16px';
      box.addEventListener('click', function(event) {
        box.style.backgroundColor = activeColor;
      });
      container.appendChild(box);
    }

    document.body.appendChild(container);  
}

  
  