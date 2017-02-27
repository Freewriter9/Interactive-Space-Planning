var canvas;
var dizzycircles =[];
var transparency;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  for(var i = 0; i<250; i++){
    if(i%4==0){rot_angle=20;} else{rot_angle=0;}
    transparency = random(0.5,1);
    dizzycircles[i] = new dcircles(random(0,1),random(10,40),random(2,40),rot_angle,transparency);
  }
  
  
}

function draw() {

  background(255);
  for(var i = 0; i<dizzycircles.length; i++){
    dizzycircles[i].update();
    dizzycircles[i].move();
    dizzycircles[i].display();
  }
  //print(dizzycircles[1].trans());
}
