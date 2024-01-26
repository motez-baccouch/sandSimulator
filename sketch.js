const cells=60;
let arr2D,nextArr2D;
function setup() {
  createCanvas(400, 400);
  arr2D = new Array(cells).fill().map(() => new Array(cells).fill(0));
  arr2D[0][0]=1;
}







function draw() {
  background(255);

  // Set cell size
  let cellSize = width / cells;

  // Draw the table
  /*for (let i = 0; i < cells; i++) {
    for (let j = 0; j < cells; j++) {
      // Calculate cell position
      let x = j * cellSize;
      let y = i * cellSize;

      // Draw cell
      fill(200);
      rect(y , x , cellSize, cellSize);

      // Draw borders
      stroke(0);
      strokeWeight(2);
      line(x, y, x + cellSize, y); // Top
      line(x, y, x, y + cellSize); // Left
    }
  }*/
      sandSpawner(mouseX,mouseY);
      sandParticle();
      sandBehaviour();
      
      
    }
  

function sandParticle(){
  
  cellSize=width/cells;
  for(let i=0; i<cells ; i++){
    for(let j=0; j<cells ; j++){
      if(arr2D[i][j]){
        let c = getRandomColor();
        fill(c);
        square(i*cellSize,j*cellSize,cellSize);
         
      }
    }
  }
}

function sandBehaviour(){
  nextArr2D=new Array(cells).fill().map(() => new Array(cells).fill(0));
  for(let i=0; i<cells ; i++){
    for(let j=0; j<cells ; j++){
      
      if(arr2D[i][j]){
        if(j<cells-1 &&   arr2D[i][j+1]==0){
          nextArr2D[i][j]=0;
          nextArr2D[i][j+1]=1; 
        }else{
          nextArr2D[i][j]=1;
        }
        
        if(j<cells &&  i<cells-2 && i!=0 && arr2D[i][j+1]==1 && arr2D[i-1][j+1]==0 && arr2D[i+1][j+1]==1){
          
            nextArr2D[i-1][j+1]=1;
            nextArr2D[i][j]=0;
          
          
        }else if(j<cells-1  && i>0 && i<cells-2 && arr2D[i][j+1]==1 && arr2D[i+1][j+1]==0 && arr2D[i-1][j+1]==1){
          
          nextArr2D[i+1][j+1]=1;
          nextArr2D[i][j]=0;
          
          
        }else if(j<cells-1  && i>0 && i<cells-2 && arr2D[i][j+1]==1 && arr2D[i+1][j+1]==0 && arr2D[i-1][j+1]==0){
          if (random(1) < 0.5) {
            nextArr2D[i+1][j+1]=1;
          nextArr2D[i][j]=0;
          }else if(j<cells-1  && i==cells-1  && arr2D[i][j+1]==1  && arr2D[i-1][j+1]==0){
            nextArr2D[i-1][j+1]=1;
              nextArr2D[i][j]=0;
          }else{
            nextArr2D[i-1][j+1]=1;
            nextArr2D[i][j]=0;
          }
        }
         
      }
    }
  }
  arr2D=nextArr2D;
}

function sandSpawner(x,y){
  if(x<width && y<height && y>0 && x>0){
  let horizontal= floor(x/(width/cells))
  let vertical= floor(y/(width/cells))
  arr2D[horizontal][vertical]=1;
  }
}

function getRandomColor() {
  let r = floor(random(256));
  let g = floor(random(256));
  let b = floor(random(256));
  return color(r, g, b);
}