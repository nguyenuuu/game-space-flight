class bullet {
    constructor(game) {
        this.game = game;
        // bX, bY, Deg
        this.location = [];
        this.action = false;
    }
    draw() {
        this.update();
        for (let i = 0; i < this.location.length; i++) {
            this.game.ctx.drawImage(imageBullet, this.location[i][0], this.location[i][1]);
        }
    }

    update() {
        this.action = false;
        this.game.canvas.addEventListener("mousedown", () => {
            if (this.action) return;
            let bX = (imageSun.width / 2 + imageShip.height / 1.2) * Math.cos(this.game.deg);
            let bY = bX * Math.tan(this.game.deg) + g_height / 2;
            this.location.push([bX + g_width / 2 - imageBullet.width / 2, bY, this.game.deg]);
            this.action = true;
        });
        // move 
        for (let i = 0; i < this.location.length; i++) {
            this.location[i][0] += 20 / 5 * Math.cos(this.location[i][2]);
            this.location[i][1] += 20 / 5 * Math.sin(this.location[i][2]);
        }
        for (let i = 0; i < this.location.length; i++) {
            if (this.location[i][0] < 0 || this.location[i][0] > g_width || this.location[i][1] < 0 || this.location[i][1] > g_height) {
                this.location.splice(i, 1);
                i--;
            }
        }
    }
}