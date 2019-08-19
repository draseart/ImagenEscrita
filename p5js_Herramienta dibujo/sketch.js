let relleno = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  relleno = 100;
}

function keyPressed(){ //teclas funcion
  if(keyCode === 65 && relleno < 255){//A para mayor luminosidad
    relleno = relleno + 5;
  }else if(keyCode === 83 && relleno > 0){ //S para menor luminosidad
    relleno = relleno - 5;  //BackSpace para nuevo
  }else if(keyCode === 8){
    setup();
  }
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    fill('rgba('+relleno+', '+relleno+', '+relleno+', 1)');
  } else {
    fill(0,0);
  }
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

function variableEllipse(x, y, px, py) { //Elipse dinamica segun velocidad de puntero
  let speed = abs(x - px) + abs(y - py);
  ellipse(x, y, speed, speed);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}