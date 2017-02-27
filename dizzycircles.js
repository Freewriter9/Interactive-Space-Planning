//function dcircles(transparency, stroked, l, b, colour,rot_angle){
//function dcircles(stroked, l, b, colour,rot_angle){

function dcircles(stroked, l, b,rot_angle,trans){  
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
  this.outline = stroked;
  this.trans=random(0.5,1);
  
  var colour_select = ['136,163,27', '215,33,38', '245,214,37', '245,238,148', '252,157,63', '179,189,40'];
  
  this.colour = random(colour_select);
  
  rectMode(CENTER);
  
  this.display = function(){
    //noStroke();
    stroke('rgb('+this.colour+')');
    //strokeWeight(this.outline);
    fill('rgba('+this.colour+','+this.trans+')');
    push();
    translate(this.x,this.y);
    rotate(radians(this.rotate));
    rect(0,0,this.len,this.breadth);
    pop();
    if(this.rotate!=0)
    {this.rotate=this.rotate+4;}
  }
  
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    this.trans = this.trans - (1/100);
    
    if(this.trans<0){
      this.trans = random(0.5,1);
    }
  }
  
  this.update = function(){
    this.xDirection = random(-1,1);
    this.yDirection = random(-1,1);
    distance = dist(this.x,this.y, mouseX, mouseY);
    
    if(distance < 50){
      this.x = this.x + (this.xSpeed*this.xDirection);
      this.y = this.y + (this.ySpeed*this.yDirection);
    }
    
    if(this.x>windowWidth || this.x<0 || this.y>windowHeight || this.y<0 ){
      this.x = random(windowWidth);
      this.y = random(windowHeight);
    }
  }
  
}
