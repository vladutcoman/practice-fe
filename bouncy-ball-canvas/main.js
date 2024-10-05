const options = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const ballCOunt = 10;
const balls = [];

function setup() {
  canvas.width = options.width;
  canvas.height = options.height;

  for (let i = 0; i < ballCOunt; i++) {
    const size = randInt(10, 50);
    const x = randInt(size, canvas.width - size);
    const y = randInt(size, canvas.height - size);
    const vx = randInt(-5, 5);
    const vy = randInt(-5, 5);
    const color = `rgb(${randInt(0, 155)}, ${randInt(0, 155)}, ${randInt(
      0,
      255
    )})`;

    balls.push(new Ball(x, y, size, vx, vy, color));
  }

  requestAnimationFrame(loop);
}

function update() {
  balls.forEach((ball) => {
    ball.update();
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let ball of balls) {
    ball.draw(ctx);
  }
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

// loop();

// EVENTS
window.addEventListener("load", () => {
  setup();
});

// HELPERS
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// CLASSES
class Ball {
  constructor(x, y, size, vx, vy, color) {
    this.x = x;
    this.y = y;
    this.radius = size / 2;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      this.vx *= -1;
    }

    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
      this.vy *= -1;
    }
  }

  draw(_ctx) {
    _ctx.beginPath();
    _ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    _ctx.closePath();
    _ctx.fillStyle = this.color;
    _ctx.fill();
  }
}
