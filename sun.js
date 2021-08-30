class sun {
    constructor(game) {
        this.game = game;
        this.degSun = 0;
    }
    draw() {
        this.game.ctx.save();
        this.game.ctx.translate(g_width / 2, g_height / 2);
        this.game.ctx.rotate(this.degSun * Math.PI / 180);
        this.game.ctx.translate(-g_width / 2, -g_height / 2);
        this.game.ctx.drawImage(imageSun, g_width / 2 - imageSun.width / 2, g_height / 2 - imageSun.height / 2);
        this.game.ctx.restore();
        this.degSun += 0.3 / 10;
        if (this.degSun > 360) {
            this.degSun = 0;
        }
    }
}