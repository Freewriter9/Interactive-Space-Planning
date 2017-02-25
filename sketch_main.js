var space = [];
var scale_slider;
var rot_slider = [];
//var info_l;
//var info_b;
//var info_area = [];
var len_input;
var bread_input;
var name_input;
var l;
var b;
var canvas;
var button1;

var bread_text;
var len_text;
var name_text;

//function windowResized(){
  //resizeCanvas(windowWidth, windowHeight);
//}

function setup() {

  canvas = createCanvas(800, 500);
  canvas.position(400,60);

  button1 = createButton('Add');
  button1.position(20,100);
  button1.mousePressed(newSpace);
  
  button2 = createButton('Remove');
  button2.position(100,100);
  button2.mousePressed(removeSpace);
  
  scale_slider = createSlider(0,20,10);
  scale_slider.position(140,165);
  scale_slider.style('background', '#ff5252');
  
  scale_slider_text = createP('Scale Slider');
  scale_slider_text.position(20, 140);
  scale_slider_text.class('heading');
  
  rot_slider_text = createP('Rotation Slider');
  rot_slider_text.position(20,180);
  rot_slider_text.hide();
  
  for(var i = 0; i<space.length; i++){
    space[i] = new Rect_Shape(l,b);
  }
}


function newSpace(){
  
  button3 = createButton('Submit');
  button3.mousePressed(fixDimention);
  button3.position(120,300);
  
  len_input = createInput();
  len_input.position(120,200);
  
  len_text = createP('Length');
  len_text.class('heading');
  len_text.position(20,175);
  
  bread_input = createInput();
  bread_input.position(120,230);
  
  bread_text = createP('Breadth');
  bread_text.class('heading');
  bread_text.position(20,207);
  
  
  name_input = createInput();
  name_input.position(120,260);
  
  name_text = createP('Name');
  name_text.class('heading');
  name_text.position(20,239);
  
  
  
  for(var i = 0; i<space.length; i++){  
    space[i].active = false;
    rot_slider[i].hide();
    rot_slider_text.hide();
  }
  
}

function fixDimention(){
  
  l = Number(len_input.value());
  b = Number(bread_input.value());
   
  if (l!==null && b!==null ){
    space.push(new Rect_Shape(l,b,name_input.value()));
   }
   
  button3.hide();
  len_input.hide();
  len_text.hide();
  bread_input.hide();
  bread_text.hide();
  name_input.hide();
  name_text.hide();
  
  for(var i = 0; i<space.length; i++){
  rot_slider[i] = createSlider(0,360,0);
  rot_slider[i].hide();
  rot_slider[i].position(140,210);
  }
}

function removeSpace(){
  //for(var i = space.length-1; i>=0; i--){
  for(var i = 0; i<space.length; i++){  
    if(space[i].active == true){
      space.splice(i);
      rot_slider.splice(i,1);
    }
  }
}


function draw() {
  var sw;
  background('#ffffff');
   
  for(var j = 0; j<300; j++){
    if(j%2==0){sw=1;} else{sw=0.4;}
    strokeWeight(sw);
    stroke('#fce8db');
    line(8*j,0,8*j,height);
    line(0,8*j,width,8*j);
    
  }
  
  for(var i = 0; i<space.length; i++){
   space[i].display();
   
   
   if(space[i].active===true){
     space[i].rotate_angle=rot_slider[i].value();
    }
  }
}

function mouseClicked(){
  var info_l;
  var info_b;
  for(var i = 0; i<space.length; i++){
    if(space[i].mouseover==true){
      print('First Space' + i + ' was active: ' + space[i].active);
      
      if(space[i].active==false){
        for(var j = 0; j < space.length; j++){
          space[j].active = false;
          rot_slider[j].hide();
          rot_slider_text.hide();
          //info_l.hide();
          //info_b.hide();
          print('All other space ' + j + ' is active: ' + space[j].active);
        }
        
        space[i].active=true;
        //info_l.show();
        //info_b.show();
        rot_slider[i].show();
        rot_slider_text.show();
        print('Now space ' + i + ' is active: ' + space[i].active);
      }
        
      else if(space[i].active==true){
        space[i].active=false;
        //info_l.hide();
        //info_b.hide();
        rot_slider[i].hide();
        rot_slider_text.hide();
        print('Space ' + i + ' is now active: ' + space[i].active);
  
      }  
    }
    print('-----------');
  }
}


function mouseDragged(){
  for(var i = 0; i<space.length; i++){
    if(space[i].active === true && space[i].mouseover==true){
      space[i].x = mouseX;
      space[i].y = mouseY;
    }
  }
}
  

