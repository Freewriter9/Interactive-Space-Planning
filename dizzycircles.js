//function dcircles(transparency, stroked, l, b, colour,rot_angle){
//function dcircles(stroked, l, b, colour,rot_angle){
function dcircles(stroked, l, b,rot_angle){  
  //this.colour = colour;
  //this.radius = random(5,20);
  this.len = l;
  this.breadth = b;
  this.array = [];
  this.x = random(windowWidth);
  this.y = random(windowHeight);
  this.xSpeed = 10;
  this.ySpeed = 10;
  this.rotate = rot_angle;
  this.speed = 1;
  //this.transparency = transparency;
  this.outline = stroked;
  
  var colour_select = [color(136,163,random(255)), color(215,33,38,random(255)), color(245,214,37,random(255)), color(245,238,148,random(255)), color(252,157,63,random(255)), color(179,189,40,random(255))];
  
  this.colour = colour_select[random(colour_select.length)];
  
  rectMode(CENTER);
  
  this.display = function(){
    noStroke();
    //fill('this.colour', random(100));
    //fill(random(255),random(255),random(255),random(255))
    //fill(this.colour);
    stroke(this.colour);
    strokeWeight(this.outline);
    fill(this.colour);
    push();
    translate(this.x,this.y);
    rotate(radians(this.rotate));
    rect(0,0,this.len,this.breadth);
    pop();
    if(this.rotate!=0)
    {this.rotate=this.rotate+2;}
  }
  
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  
  this.update = function(){
    this.xDirection = random(-1,1);
    this.yDirection = random(-1,1);
    distance = dist(this.x,this.y, mouseX, mouseY);
    
    if(distance < 50){
      this.x = this.x + (this.xSpeed*this.xDirection);
      this.y = this.y + (this.ySpeed*this.yDirection);
      //push();
      //translate(this.x,this.y);
      //rotate(radians(random(180)));
      //pop();
    }
    
    if(this.x>windowWidth || this.x<0 || this.y>windowHeight || this.y<0 ){
      this.x = random(windowWidth);
      this.y = random(windowHeight);
    }
  }
  
}