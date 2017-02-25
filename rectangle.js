function Rect_Shape(len, breadth,name){
  this.x = random(width/2-len);
  this.y = random(height/2-breadth);
  this.mouseover = false;
  this.active = false;
  this.rotate_angle=0;
  this.stroke_value = 0;
  this.len = len;
  this.brea = breadth;
  rectMode(CENTER);

  this.display = function(){
    
    this.l = len * scale_slider.value();
    this.b = breadth * scale_slider.value();
    
    if(mouseX > this.x - this.l/2 && mouseX < this.x + this.l/2 && mouseY > this.y - this.b/2 && mouseY < this.y + this.b/2){
      this.mouseover = true;
      fill('#ff5252');
    } 
    
    else{
      this.mouseover = false;
      fill('#ff5252');
    }
    
    if(this.active == true){
      this.stroke_value = 3;
    }
    else{
      this.stroke_value = 0;
    }
    
    
    push();
    translate(this.x,this.y);
    rotate(radians(this.rotate_angle));
    
    stroke(200, 79, 100);
    strokeWeight(this.stroke_value);
    rect(0,0,this.l,this.b);
    
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    text(name,0,0,this.l,this.b);
    pop();
  
}  
}

