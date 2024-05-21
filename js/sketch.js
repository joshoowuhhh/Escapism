
let canvas;
let n;
let offset = 0;
let x1; let y1;
let x2; let y2;
let x3; let y3;
let x4; let y4;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -1)
    background(255);
  }
  
  function windowResized(){
   resizeCanvas(windowWidth, windowHeight); 
}

  function draw(){
    strokeWeight(0.3);
    noFill();
    x1 = noise(offset+100)*width;
    x2 = noise(offset+100)*width;
    x3 = noise(offset+150)*width;
    x4 = noise(offset+200)*width;
    y1 = noise(offset+250)*height;
    y2 = noise(offset+300)*height;
    y3 = noise(offset+350)*height;
    y4 = noise(offset+400)*height;
    offset += 0.05;
    
    bezier(x1, y1, x2, y2, x3, y3, x4, y4); 
  }