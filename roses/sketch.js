var k = 5 / 8;
var slider;
function setup() {
    createCanvas(600, 600);
    slider = createSlider(1, 10, 4, 0.1);
}
function draw() {
    k = slider.value();
    background(51);
    translate(width / 2, height / 2);
    beginShape();
    stroke(255);
    noFill();
    strokeWeight(4);
    for (let i = 0; i < TWO_PI * 8; i += 0.02) {
        var r = (width / 4) * cos(k * i);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
    }
    endShape();
}
