
let sp = 10;
let counter = 0;


function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(250);
  stroke ('#222222');
  strokeWeight (sp/15);
  sp = map(mouseX, 0 ,width, 10, 100);
for(var y = 0; y <= height; y = y+sp){
  for(var x = 0; x <= width; x = x+sp){
    fill(200,60);
    if(counter %2 == 0){
    ellipse(x, y, 70, 70);
      }else{ellipse(x,y,70,70);
          }
        }
    counter =0;
      }
    counter =0
}