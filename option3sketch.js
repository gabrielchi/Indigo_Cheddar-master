let song;
let fft;
let button;
let w
let q;
let amp;
let xoff = 0
let highMids = [];
let ampLev = 256;
let ampStart = 0;
let numLines;

let sliderR, sliderG, sliderB; //sliders for background
let sliderR2, sliderG2, sliderB2; //sldiers for foreground

let R2val, G2val, B2val; //vals for the line colors

let numLinesSlider;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('assets/option3.mp3');
}

function setup() {
  var cnv = createCanvas(400, 400);
  var x = (windowWidth - width) / 2;
  var y = ((windowHeight - height) - 50) / 2;
  cnv.position(x, y);
  button = createButton('pause or play');
  button.mousePressed(toggleSong);
  colorMode(RGB);
  fft = new p5.FFT(0.95, 64);
  w = width / 40;
  q = random(width);

  strokeWeight(2);

  noFill();

  numLinesSlider = createSlider(1,50,25,1); //slider at top middle
  numLinesSlider.position(600+width/8, 520)

  sliderR = createSlider(0, 255, 7, 20); //slider values for background (left)
  sliderG = createSlider(0, 255, 96, 20);
  sliderB = createSlider(0, 255, 65, 20);

  sliderR.position(400+ width/8,550);
  sliderG.position(400+ width/8,580);
  sliderB.position(400+ width/8,610);

  sliderR2 = createSlider(0, 255, 242, 20); //slider values for line color(right)
  sliderG2 = createSlider(0, 255, 107, 20);
  sliderB2 = createSlider(0, 255, 107, 20);

  sliderR2.position(800+width/8,550);
  sliderG2.position(800+width/8,580);
  sliderB2.position(800+width/8,610);

}

function windowResized(){
  centerCanvas();
}

function draw() {
  
  background(sliderR.value(), sliderG.value(), sliderB.value())

  var spectrum = fft.analyze();
  stroke(255);
  var hmVal = fft.getEnergy('highMid');
  
  numLines = numLinesSlider.value();

 
  for (var z = 0; z < numLines; z++) {
    beginShape();
    stroke(sliderR2.value(), sliderG2.value(), sliderB2.value())
    for (var i = 0; i < spectrum.length; i++) {
      amp = spectrum[i];
      var y = map(amp, ampStart, ampLev, height / numLines, 10);
      vertex(i * w - 50, -y * (z) + height);
    }

    endShape();
  }


}

