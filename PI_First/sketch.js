let pi;
let digits;
let counts = new Array(10);
let index = 0;
function preload() {
    pi = loadStrings('million.txt');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    const sdigits = pi[0].split('');
    digits = int(sdigits);
    background(0);
    stroke(255);
    noFill();
    translate(width / 2, height / 2);
    ellipse(0, 0, width, height);
}

function draw() {
    translate(width / 2, height / 2);
    const digit = digits[index];
    const nextDigit = digits[index + 1];
    index++;
    const diff = TWO_PI / 10;

    const a1 = map(digit, 0, 10, 0, TWO_PI) + random(-diff, diff);
    const a2 = map(nextDigit, 0, 10, 0, TWO_PI) + random(-diff, diff);

    const x1 = (width / 2) * cos(a1);
    const y1 = (height / 2) * sin(a1);

    const x2 = (width / 2) * cos(a2);
    const y2 = (height / 2) * sin(a2);

    stroke(color(random(255), random(255), random(255)));
    //   ellipse(x1 - x2, y1 - y2, 10, 10);
    line(x1, y1, x2, y2);
}
