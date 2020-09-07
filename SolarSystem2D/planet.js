class Planet {
    constructor(radius, distance, orbitspeed, angle) {
        this.radius = radius;
        this.angle = angle;
        this.distance = distance;
        this.orbitspeed = orbitspeed;
        this.planets = [];
    }
    orbit() {
        this.angle += this.orbitspeed;
        this.planets.forEach((planet) => {
            planet.orbit();
        });
    }
    spawnMoons(total, level) {
        for (let i = 0; i < total; i++) {
            let r = this.radius / (level * 2);
            let d = random(50, 250);
            let o = random(-0.1, 0.1);
            let a = random(TWO_PI);
            this.planets.push(new Planet(r, d / level, o, a));
            if (level < 3) {
                let num = Math.floor(random(0, 4));
                this.planets[i].spawnMoons(num, level + 1);
            }
        }
    }
    show() {
        push();
        fill(255, 100);
        rotate(this.angle);
        translate(this.distance, 0);
        ellipse(0, 0, this.radius * 2);
        this.planets.forEach((planet) => {
            planet.show();
        });
        pop();
    }
}
