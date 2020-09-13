const points = [];
const hull = [];

let leftMost;
let currentVertex;
let index;
let nextVertex;

function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < 10; i++) {
        points.push(createVector(random(width), random(height)));
    }
    points.sort((a, b) => a.x - b.x);
    leftMost = points[0];
    currentVertex = leftMost;
    nextVertex = points[1];
    index = 2;
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(3);
    points.forEach((p) => {
        point(p.x, p.y);
    });
    stroke(0, 255, 0);
    strokeWeight(32);
    point(leftMost.x, leftMost.y);

    stroke(200, 0, 255);
    strokeWeight(32);
    point(currentVertex.x, currentVertex.y);

    stroke(0, 255, 0);
    strokeWeight(2);
    line(currentVertex.x, currentVertex.y, nextVertex.x, nextVertex.y);

    let checking = points[index];

    stroke(255);
    line(currentVertex.x, currentVertex.y, checking.x, checking.y);
}
