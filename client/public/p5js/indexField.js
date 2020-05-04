let indexBG;
let indexB = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", -1);
  canvas.style("display", "block");
  indexBG = new IndexBackground();
  for (let i = 0; i < 100; i++) {
    indexB.push(new IndexBall());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  indexBG.bgNoise();
  indexBG.bgShow();
  for (let i = 0; i < indexB.length; i++) {
    indexB[i].bNoise();
    indexB[i].bShow();
  }
}
