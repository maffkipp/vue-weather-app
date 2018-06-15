/* eslint-disable */
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// defines the circle class
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    // function for creating a circle
    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = 'white';
        c.shadowColor = 'white';
        c.shadowBlur = 10;
        c.fill();
    }

    // function for updating a circle's position
    this.update = () => {

        // changes direction upon collision with window edge
        if (this.x > window.innerWidth - this.radius || this.x < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > window.innerHeight - this.radius || this.y < this.radius) {
            this.dy = -this.dy;
        }

        // updates x and y coordinates
        this.x += this.dx;
        this.y += this.dy;

        // draws updated shape
        this.draw();
    }
}

// create empty array to store circle objects
let circleArray = [];

// create randomized circles in circleArray
for (let i=0; i<5; i++) {
    let radius = Math.random() * 150 + 50;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

// animation loop
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    circleArray.forEach(circle => {
        circle.update();
    });
}

animate();