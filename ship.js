class ship {
    constructor(game) {
        this.game = game;
    }
    draw() {
        this.game.ctx.save();
        this.game.ctx.translate(g_width / 2, g_height / 2);
        this.game.ctx.rotate(this.game.deg + Math.PI / 2);
        this.game.ctx.translate(-g_width / 2, -g_height / 2);
        this.game.ctx.drawImage(imageShip, g_width / 2 - imageShip.width / 2, g_height / 2 - imageSun.height / 2 - imageShip.height);
        this.game.ctx.restore();
    }
}