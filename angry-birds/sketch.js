let ground;
let box;
let bird;
let world, engine;

function setup() {
    createCanvas(600, 400);
    engine = Matter.Engine.create();
    world = engine.world;

    ground = new Box(0, height - 20, width, 20);
    box = new Box(450, 300, 50, 75);

    bird = new Bird(50, 300, 25);
}

function draw() {
    background(0);
    ground.show();
    box.show();
    bird.show();
}
