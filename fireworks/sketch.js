var fireworks = [];
var gravity;
let song;
function preload() {
    song = loadSound('Fireworks Finale-SoundBible.com-370363529.wav');
}
function setup() {
    //song.play();
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    gravity = createVector(0, 0.2);
    stroke(255);
    strokeWeight(4);
    background(0);
}

function draw() {
    //song.play();
    colorMode(RGB);
    background(0, 0, 0, 25);

    if (random(1) < 0.03) {
        fireworks.push(new Firework());
    }

    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();

        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
}
// let a = document.getElementById('p');
// function changeText() {
//     let x = document.getElementById('a');
//     x.addEventListener('keyup', handle);
// }
// function handle(e) {
//     a.innerHTML = '';
//     a.innerHTML += e.target.value;
// }
// changeText();
