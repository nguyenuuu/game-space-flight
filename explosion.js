class explosion {
    constructor(game) {
        this.game = game;
        // ex, ey, size, frame
        this.location = [];
    }
    draw() {
        this.update();
        for (let i = 0; i < this.location.length; i++) {
            let sX = 256 * (this.location[i][3] % 8);
            let sY = 256 * (this.location[i][3] % 4);
            this.game.ctx.drawImage(imageExplosion, sX, sY, 256, 256, this.location[i][0], this.location[i][1], this.location[i][2], this.location[i][2]);
        }
    }
    update() {
        for (let i = 0; i < this.location.length; i++) {
            this.location[i][3] += 1;
            if (this.location[i][3] > 31) {
                this.location.splice(i, 1);
            }
        }
    }
}