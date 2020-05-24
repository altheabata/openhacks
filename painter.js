document.write("Thank someone in need or fighting in the frontlines! Just press on the canvas below to draw. You can change the color with the color picker on the right.");


let colorPicker;
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(500, 500);
  centerCanvas();
  background(255, 0, 200);
  colorPicker = createColorPicker('#FF0000');
  colorPicker.position(950, height + 54);
}

function windowResized() {
  centerCanvas();
}

let color = colorPicker.color()

function draw() {
  background(200);
  
  if (mouseIsPressed) {
    stroke(mouseX, mouseY, 15, 15);
    ellipse(mouseX, mouseY, 15, 15);
    fill(colorPicker.color());
  }
}