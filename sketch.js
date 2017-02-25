var canvas;
var dizzycircles =[];
var lifetime1;
var lifetime2;
var lifetime3;
var lifetime4;
var lifetime5;
var lifetime6;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  //var colour_select = [color("#88A31B"), color("#D72126"), color("#F5D625"), color("#F5EE94"), color("#FC9D3F"), color("#B3BD28")];
  //var colour_select = [color(136,163,27,lifetime), color(215,33,38,lifetime), color(245,214,37,lifetime), color(245,238,148,lifetime), color(252,157,63,lifetime), color(179,189,40,lifetime)];
  //var colour_select = [color(136,163,27,lifetime1), color(215,33,38,lifetime2), color(245,214,37,lifetime3), color(245,238,148,lifetime4), color(252,157,63,lifetime5), color(179,189,40,lifetime6)];
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  for(var i = 0; i<250; i++){
    if(i%5==0){rot_angle=20;} else{rot_angle=0;}
    lifetime1 = random(255);
    lifetime2 = random(255);
    lifetime3 = random(255);
    lifetime4 = random(255);
    lifetime5 = random(255);
    lifetime6 = random(255);
    dizzycircles[i] = new dcircles(random(0,1),random(10,40),random(2,40),rot_angle);
    
  }
  
  //frameRate(15);
}

function draw() {
  background(255);
  for(var i = 0; i<dizzycircles.length; i++){
    dizzycircles[i].display();
    dizzycircles[i].update();
    dizzycircles[i].move();
    print(lifetime1);
    //lifetime--;
    //if(lifetime<0){
      //lifetime = random(255);
    //}
  }
}