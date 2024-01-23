// state
let alderic;
let ySpeed;

function setup() {
  createCanvas(1000, 1000);

  alderic = 0;
  ySpeed = 1;
}

function draw() {
  if (keyIsPressed) {
    background(240, 20, 140);
  } else {
    background(33); // Press any key to make the background pink and to turn back to black
  }

  // draw current frame based on state
  circle(alderic, 100, random(100));

  // modify state
  alderic = alderic + ySpeed;

  if (alderic > 200) {
    ySpeed = -1; // normal speed of ball
  }

  // Basic color change with 50% chance
  if (random() > 0.5) {
    fill(random(255), random(255), random(255));
  } else {
    fill(0);
  }
}

function mousePressed() {
  if (mouseButton == LEFT) {
    ySpeed = 0; // ball stops moving
  } else if (mouseButton == RIGHT) {
    ySpeed = 1; // ball continues moving
  }
}
