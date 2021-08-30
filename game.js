class game {
    constructor() {
        this.init();
        this.action();
        this.loop();
    }
    init() {
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = g_width;
        this.canvas.height = g_height;
        this.sun = new sun(this);
        this.ship = new ship(this);
        this.bullet = new bullet(this);
        this.enemy = new enemy(this);
        this.explosion = new explosion(this);
        this.g_score = 0;
    }
    loop() {
        this.draw();
        this.gameOver();
        this.score();
        if (!rungame) {
            clearTimeout(this.loop);
            this.start();
            return;
        }
        setTimeout(() => this.loop(), 1000 / FPS);
    }
    draw() {
        this.ctx.clearRect(0, 0, g_width, g_height);
        this.sun.draw();
        this.bullet.draw();
        this.ship.draw();
        this.enemy.draw();
        this.explosion.draw();
    }
    action() {
        this.canvas.addEventListener("mousemove", (e) => {
            this.deg = Math.atan2(e.offsetY - g_height / 2, e.offsetX - g_width / 2);
        });
    }
    gameOver() {
        for (let i = 0; i < this.enemy.location.length; i++) {
            let eX = this.enemy.location[i][0] + this.enemy.location[i][2] / 2;
            let eY = this.enemy.location[i][1] + this.enemy.location[i][2] / 2;
            let cX = g_width / 2;
            let cY = g_height / 2;
            let dist = Math.sqrt((eX - cX) * (eX - cX) + (eY - cY) * (eY - cY));
            if (dist < imageSun.width / 2 + this.enemy.location[i][2] / 2) {
                rungame = false;
                break;
            }
        }
    }
    score() {
        score.innerHTML = this.g_score;
    }
    start() {
        if (!rungame) {
            g_start.style.zIndex = 1;
            g_start.addEventListener("click", () => {
                g_start.style.zIndex = -1;
                this.g_score = 0;
                this.bullet.location = [];
                this.enemy.location = [];
                this.explosion.location = [];
                rungame = true;
                this.loop();
            });
        }
    }
}
var g = new game();